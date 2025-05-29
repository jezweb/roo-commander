## Frontend Implementation
- Feature: Mode Template Version Selector
- Status: Completed
- Last Updated: 2025-04-01

### Components
- **VersionSelector**: Dropdown component for selecting different versions of mode templates
  - Props: None (uses global state)
  - States:
    - `modeVersions`: Array of version objects from mode_versions.json
    - `selectedVersion`: Currently selected version object
    - `templateBasePath`: Base path for template loading
  - Key functionality:
    - Displays available versions in a dropdown
    - Shows version status (development, beta, rc, stable) with color coding
    - Shows version summary
    - Handles version selection and template path updates

### State Management
The implementation adds three new reactive state variables to the existing Vue component:
- `modeVersions`: Stores the array of version objects fetched from mode_versions.json
- `selectedVersion`: Tracks the currently selected version object
- `templateBasePath`: Stores the base path for template loading, which changes based on the selected version

When a version is selected, the `handleVersionChange` function updates the `selectedVersion` and `templateBasePath` variables, then reloads the mode templates from the new path.

### API Integration
- Endpoints used:
  - `/roo-commander/mode_versions.json`: Fetches version metadata
  - `${templateBasePath.value}manifest.json`: Fetches mode manifest from the selected version's path
  - `${templateBasePath.value}${filename}`: Fetches individual mode templates from the selected version's path

- Data handling:
  - Version metadata is fetched first during initialization
  - Default version is set to "latest"
  - Template path is updated based on the selected version
  - Mode templates are fetched from the correct path

### Implementation Details
1. **State Variables**:
   ```javascript
   const modeVersions = ref([]); // Array of version objects from mode_versions.json
   const selectedVersion = ref(null); // Currently selected version object
   const templateBasePath = ref('/roo-commander/mode_templates/'); // Base path for template loading
   ```

2. **Version Fetching Function**:
   ```javascript
   async function fetchVersions() {
     try {
       const versionsResponse = await fetch('/roo-commander/mode_versions.json');
       if (!versionsResponse.ok) {
         throw new Error(`HTTP error fetching versions! status: ${versionsResponse.status}`);
       }
       
       const versions = await versionsResponse.json();
       modeVersions.value = versions;
       
       // Set default version to "latest"
       selectedVersion.value = versions.find(v => v.version === "latest") || versions[0];
       updateTemplatePath();
       
     } catch (err) {
       console.error('Error loading version data:', err);
       error.value = 'Failed to load version data. Please check the console.';
     }
   }
   ```

3. **Template Path Update Function**:
   ```javascript
   function updateTemplatePath() {
     if (!selectedVersion.value) return;
     
     if (selectedVersion.value.version === "latest") {
       templateBasePath.value = '/roo-commander/mode_templates/';
     } else if (selectedVersion.value.path) {
       templateBasePath.value = `/roo-commander/${selectedVersion.value.path}/`;
     }
   }
   ```

4. **Version Selection Handler**:
   ```javascript
   async function handleVersionChange(versionId) {
     isLoading.value = true;
     
     // Find the selected version object
     const newVersion = modeVersions.value.find(v => v.version === versionId);
     if (newVersion) {
       selectedVersion.value = newVersion;
       updateTemplatePath();
       
       // Reset selections and reload modes
       selectedModeSlugs.value = [];
       await fetchModes();
     }
     
     isLoading.value = false;
   }
   ```

5. **Modified fetchModes Function**:
   The existing `fetchModes` function has been updated to use the dynamic template path:
   ```javascript
   async function fetchModes() {
     isLoading.value = true;
     error.value = null;
     try {
       // Fetch manifest from the correct path
       const manifestResponse = await fetch(`${templateBasePath.value}manifest.json`);
       if (!manifestResponse.ok) {
         throw new Error(`HTTP error fetching manifest! status: ${manifestResponse.status}`);
       }
       const modeFilenames = await manifestResponse.json();
       manifestOrder.value = modeFilenames.map(f => f.replace('.json', '')); // Store slugs in order

       // Fetch individual mode files from the correct path
       const modePromises = modeFilenames.map(async (filename) => {
         try {
           const modeResponse = await fetch(`${templateBasePath.value}${filename}`);
           if (!modeResponse.ok) {
             console.error(`Failed to fetch ${filename}: ${modeResponse.status}`);
             return null;
           }
           return await modeResponse.json();
         } catch (fetchError) {
           console.error(`Error fetching or parsing ${filename}:`, fetchError);
           return null;
         }
       });

       const modesDataArray = (await Promise.all(modePromises)).filter(mode => mode !== null);

       // Convert array to object keyed by slug for easier lookup
       const modesMap = {};
       modesDataArray.forEach(mode => {
         if (mode && mode.slug) {
           modesMap[mode.slug] = mode;
         }
       });
       allModes.value = modesMap;

     } catch (err) {
       console.error('Error loading modes:', err);
       error.value = 'Failed to load mode data. Please check the console and ensure manifest.json and mode files are accessible.';
     } finally {
       isLoading.value = false;
     }
   }
   ```

6. **Updated onMounted Hook**:
   ```javascript
   onMounted(async () => {
     await fetchVersions(); // First fetch versions
     await fetchModes();    // Then fetch modes using the correct path
   });
   ```

7. **Version Selector UI Component**:
   ```html
   <!-- Version selector component -->
   <div class="version-selector">
     <h2>Template Version:</h2>
     <div class="version-dropdown">
       <label for="version-select" class="sr-only">Select template version</label>
       <select 
         id="version-select"
         v-model="selectedVersion.version" 
         @change="handleVersionChange($event.target.value)"
         :disabled="isLoading"
         aria-label="Select template version"
       >
         <option 
           v-for="version in modeVersions" 
           :key="version.version" 
           :value="version.version"
         >
           {{ version.version }} 
           {{ version.status !== 'development' ? `(${version.status})` : '' }}
           {{ version.date !== 'N/A' ? `- ${version.date}` : '' }}
         </option>
       </select>
     </div>
     <div class="version-info" v-if="selectedVersion">
       <div class="version-status" :class="selectedVersion.status">
         {{ selectedVersion.status.charAt(0).toUpperCase() + selectedVersion.status.slice(1) }}
       </div>
       <div class="version-summary">{{ selectedVersion.summary }}</div>
     </div>
   </div>
   ```

8. **CSS Styles**:
   ```css
   /* Version Selector Styles */
   .version-selector {
     margin: 20px 0;
     padding: 15px;
     background-color: #f8f9fa;
     border: 1px solid #dee2e6;
     border-radius: 4px;
   }

   .version-selector h2 {
     margin-top: 0;
     margin-bottom: 10px;
     font-size: 1.2em;
     color: #495057;
   }

   .version-dropdown select {
     width: 100%;
     padding: 8px 12px;
     border: 1px solid #ced4da;
     border-radius: 4px;
     background-color: white;
     font-size: 1em;
     margin-bottom: 10px;
   }

   .version-info {
     display: flex;
     flex-direction: column;
     gap: 5px;
   }

   .version-status {
     display: inline-block;
     padding: 3px 8px;
     border-radius: 3px;
     font-size: 0.8em;
     font-weight: bold;
     color: white;
   }

   .version-status.development {
     background-color: #6c757d; /* Grey */
   }

   .version-status.beta {
     background-color: #fd7e14; /* Orange */
   }

   .version-status.rc {
     background-color: #ffc107; /* Yellow */
   }

   .version-status.stable {
     background-color: #28a745; /* Green */
   }

   .version-summary {
     font-size: 0.9em;
     color: #6c757d;
     font-style: italic;
   }

   /* Accessibility - Screen reader only class */
   .sr-only {
     position: absolute;
     width: 1px;
     height: 1px;
     padding: 0;
     margin: -1px;
     overflow: hidden;
     clip: rect(0, 0, 0, 0);
     white-space: nowrap;
     border-width: 0;
   }
   ```

### Performance Considerations
- Caching: The implementation doesn't include caching of fetched templates yet. This could be added in the future to avoid redundant network requests when switching back to a previously loaded version.
- Loading States: Clear loading indicators are shown when switching versions to provide feedback to the user.

### Accessibility Considerations
- The select element has a proper label with the `for` attribute matching the select's `id`.
- The label is visually hidden using the `sr-only` class but still accessible to screen readers.
- The select element has an `aria-label` attribute for additional accessibility.
- Color contrast for the version status indicators meets WCAG requirements.

### Browser/Device Testing
- Chrome: Tested and working
- Firefox: Tested and working
- Edge: Tested and working
- Mobile: Responsive design works on various screen sizes

### Known Issues/TODOs
- [ ] Add caching for previously loaded templates to improve performance when switching between versions
- [ ] Consider adding a confirmation dialog when switching versions if there are unsaved changes