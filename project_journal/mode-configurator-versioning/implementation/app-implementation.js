// This file contains the implementation details for the version selection feature
// to be added to App.vue

// 1. Add these new reactive state variables to the existing state section:
// const modeVersions = ref([]); // Array of version objects from mode_versions.json
// const selectedVersion = ref(null); // Currently selected version object
// const templateBasePath = ref('/roo-commander/mode_templates/'); // Base path for template loading

// 2. Add these new functions for version management:

// Function to fetch version metadata
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

// 3. Modify the fetchModes function to use the dynamic template path:
// Replace the existing fetchModes function with this updated version
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

// 4. Update the onMounted hook to fetch versions first, then modes:
// Replace the existing onMounted hook with this updated version
// onMounted(async () => {
//   await fetchVersions(); // First fetch versions
//   await fetchModes();    // Then fetch modes using the correct path
// });

// 5. Add the version selector component to the template:
/*
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
*/