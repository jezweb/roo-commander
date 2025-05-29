# Mode Template Versioning: Frontend Implementation Plan

**Project:** Mode Template Versioning (`mode-configurator-versioning`)  
**Date:** 2025-04-01  
**Author:** Frontend Developer  

## Overview

This document outlines the implementation plan for adding version selection capabilities to the Mode Configurator web application. The feature will allow users to select different versions of mode templates (stable, beta, rc, and latest development) and load the appropriate templates based on their selection.

## 1. Required Changes

### 1.1 State Management

Add new reactive state variables to `App.vue`:

```javascript
// Version-related state
const modeVersions = ref([]); // Array of version objects from mode_versions.json
const selectedVersion = ref(null); // Currently selected version object
const templateBasePath = ref('/roo-commander/mode_templates/'); // Base path for template loading
```

### 1.2 Data Fetching

Modify the data fetching flow to:
1. First fetch and parse `mode_versions.json`
2. Set the default version to "latest"
3. Determine the correct template path based on the selected version
4. Fetch the manifest and mode templates from the correct path

```javascript
// New function to fetch version metadata
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

// Function to update template path based on selected version
function updateTemplatePath() {
  if (!selectedVersion.value) return;
  
  if (selectedVersion.value.version === "latest") {
    templateBasePath.value = '/roo-commander/mode_templates/';
  } else if (selectedVersion.value.path) {
    templateBasePath.value = `/roo-commander/${selectedVersion.value.path}/`;
  }
}

// Modified fetchModes function to use the correct path
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

### 1.3 Initialization Flow

Update the initialization flow to fetch versions first, then modes:

```javascript
// Modified onMounted hook
onMounted(async () => {
  await fetchVersions(); // First fetch versions
  await fetchModes();    // Then fetch modes using the correct path
});
```

### 1.4 Version Selection Handler

Add a handler for version selection changes:

```javascript
// Handle version selection change
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

### 1.5 UI Components

Add a version selector component to the UI:

```html
<!-- Version selector component -->
<div class="version-selector">
  <h2>Template Version:</h2>
  <div class="version-dropdown">
    <select 
      v-model="selectedVersion.version" 
      @change="handleVersionChange($event.target.value)"
      :disabled="isLoading"
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

### 1.6 CSS Styling

Add CSS styles for the version selector:

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
```

## 2. Implementation Steps

1. **Add Version State Variables**
   - Add the new reactive state variables to `App.vue`
   - Implement the `updateTemplatePath` function

2. **Implement Version Fetching**
   - Create the `fetchVersions` function
   - Modify the `onMounted` hook to fetch versions first

3. **Update Mode Fetching**
   - Modify the `fetchModes` function to use the dynamic template path
   - Implement error handling for missing templates

4. **Add Version Selection Handler**
   - Implement the `handleVersionChange` function
   - Add watchers for version changes if needed

5. **Add UI Components**
   - Add the version selector component to the template
   - Position it appropriately in the UI flow (likely above the mode selection area)

6. **Add CSS Styling**
   - Add the CSS styles for the version selector
   - Ensure responsive behavior

7. **Testing**
   - Test with different versions
   - Verify correct template loading
   - Test error handling

## 3. Component Placement

The version selector should be placed prominently in the UI, ideally between the header section and the mode selection area. This placement ensures users are aware of the version they're working with before selecting modes.

```html
<div class="container">
  <h1>Roo Commander Mode Configurator</h1>
  <p>
    Welcome to the Roo Commander Mode Configurator! This tool allows you to select which predefined 'modes' (specialised AI roles) you want to include in your Roo Commander setup.
    Choose the modes relevant to your workflow, and the tool will generate the necessary JSON configuration array below. You can then copy this JSON and use it to customise your Roo Commander experience.
  </p>
  <p>
    For detailed explanations of each mode and how they work together, please refer to the main <a href="https://github.com/jezweb/roo-commander/blob/main/README.md" target="_blank" rel="noopener noreferrer">README.md</a> file in the repository.
  </p>

  <!-- Version selector component goes here -->
  <div class="version-selector">
    <!-- Version selector content -->
  </div>

  <div class="controls">
    <button @click="selectAll">Select All</button>
    <button @click="deselectAll">Deselect All</button>
  </div>

  <!-- Rest of the UI -->
</div>
```

## 4. Error Handling

Implement robust error handling for:

1. Failed version metadata fetching
2. Failed manifest fetching from a specific version path
3. Failed mode template fetching from a specific version path

Display appropriate error messages to the user and provide fallback behavior when possible.

## 5. Performance Considerations

1. **Caching**: Consider caching fetched templates to avoid redundant network requests when switching back to a previously loaded version.

2. **Loading States**: Ensure clear loading indicators when switching versions to provide feedback to the user.

3. **Lazy Loading**: If the number of versions grows significantly, consider implementing lazy loading or pagination for the version list.

## 6. Accessibility Considerations

1. Ensure the version selector has proper ARIA attributes for screen readers.
2. Provide sufficient color contrast for the version status indicators.
3. Make sure the version selector is keyboard navigable.
