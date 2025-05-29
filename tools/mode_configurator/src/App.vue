<script setup>
import { ref, onMounted, computed, watch } from 'vue';

// --- Constants ---
const CATEGORIES_DEFINITION = {
  "Management & Coordination": [
    "roo-commander", "project-manager", "technical-architect", "devops-manager", "project-onboarding"
  ],
  "Core Development & Design": [
    "frontend-developer", "api-developer", "database-specialist", "ui-designer"
  ],
  "Specialized Development": [
    "react-specialist", "material-ui-specialist", "tailwind-specialist", "php-laravel-developer", "firebase-specialist", "supabase-developer"
  ],
  "AI Development": [
    "agentic-ai-developer", "rag-database-developer", "openai-api-developer", "google-gemini-api-developer", "vertex-ai-developer"
  ],
  "DevOps & Infrastructure": [
    "cicd-specialist", "infrastructure-specialist", "containerization-developer"
  ],
  "Quality, Testing & Refinement": [
    "bug-fixer", "code-reviewer", "integration-tester", "performance-optimizer", "refactor-specialist", "accessibility-specialist", "security-specialist"
  ],
  "Utility & Support": [
    "discovery-agent", "project-initializer", "git-manager", "complex-problem-solver", "research-context-builder", "second-opinion", "technical-writer", "mcp-installer", "mcp-server-creator-py", "mcp-server-creator-ts"
  ]
};

// --- Reactive State ---
const allModes = ref([]); // Holds the data for all fetched modes (keyed by slug)
const manifestOrder = ref([]); // Holds the order from manifest.json
const selectedModeSlugs = ref([]); // Holds the slugs of selected modes
const modeVersions = ref([]); // Array of version objects from mode_versions.json
const selectedVersion = ref(null); // Currently selected version object
const templateBasePath = ref(''); // Base path for template loading - will be set dynamically
const isLoading = ref(true);
const error = ref(null);
const copyButtonText = ref('Copy to Clipboard');
const groupSelectionState = ref({}); // Tracks state for group checkboxes { categoryName: 'checked' | 'unchecked' | 'indeterminate' }

// --- Data Fetching ---
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

// Function to fetch version metadata
async function fetchVersions() {
  try {
    const versionsResponse = await fetch('/mode_versions.json'); // Fetch from root relative to public dir
    if (!versionsResponse.ok) {
      throw new Error(`HTTP error fetching versions! status: ${versionsResponse.status}`);
    }
    
    const versions = await versionsResponse.json();
    // Sort versions for display if needed, but keep original for finding 'latest'
    modeVersions.value = versions; // Keep original order or sort later for display
     
     // Set default version to "latest"
     selectedVersion.value = versions.find(v => v.version === "latest") || versions[0];
    if (!selectedVersion.value) {
      throw new Error("Could not find a default version (latest or first).");
    }
    updateTemplatePath(); // Set the initial path based on the default version
    
  } catch (err) {
    console.error('Error loading version data:', err);
    error.value = 'Failed to load version data. Please check the console.';
  }
}

// Function to update template path based on selected version
function updateTemplatePath() {
  if (!selectedVersion.value || !selectedVersion.value.path) {
    console.error("Cannot update template path: selected version or its path is missing.", selectedVersion.value);
    // Set a default or handle the error appropriately - maybe point to the first available path?
    templateBasePath.value = modeVersions.value.length > 0 ? `/${modeVersions.value[0].path}/` : ''; // Fallback or handle error - Removed /roo-commander/ prefix
    return;
  }
  // Use the path directly from the version object
  templateBasePath.value = `${selectedVersion.value.path}/`; // Use relative path
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

// Fetch versions and modes when the component is mounted
onMounted(async () => {
  await fetchVersions(); // First fetch versions
  await fetchModes();    // Then fetch modes using the correct path
});

// --- Computed Properties ---

// Group modes based on CATEGORIES_DEFINITION and manifestOrder
const groupedModes = computed(() => {
  const groups = {};
  if (isLoading.value || error.value) return groups; // Return empty if still loading or error

  for (const categoryName in CATEGORIES_DEFINITION) {
    groups[categoryName] = [];
    const slugsInCategory = CATEGORIES_DEFINITION[categoryName];

    // Add modes to the group based on manifest order
    manifestOrder.value.forEach(slug => {
      if (slugsInCategory.includes(slug) && allModes.value[slug]) {
        groups[categoryName].push(allModes.value[slug]);
      }
    });
  }
  return groups;
});

// Generate JSON output based on selected slugs, maintaining manifest order
const outputJson = computed(() => {
  const selectedModesData = manifestOrder.value
    .filter(slug => selectedModeSlugs.value.includes(slug))
    .map(slug => allModes.value[slug])
    .filter(mode => mode !== undefined); // Filter out any potential undefined modes

  return JSON.stringify({ customModes: selectedModesData }, null, 2); // Pretty print
});

// --- Methods ---

function selectAll() {
  selectedModeSlugs.value = manifestOrder.value.filter(slug => allModes.value[slug]); // Select all available modes
}

function deselectAll() {
  selectedModeSlugs.value = [];
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(outputJson.value);
    copyButtonText.value = 'Copied!';
    setTimeout(() => {
      copyButtonText.value = 'Copy to Clipboard';
    }, 1500);
  } catch (err) {
    console.error('Failed to copy text: ', err);
    alert('Failed to copy JSON. Please copy manually.');
  }
}

// Toggle selection for an entire group
function toggleGroupSelection(categoryName, modesInCategory) {
    const categorySlugs = modesInCategory.map(mode => mode.slug);
    const allSelectedInGroup = categorySlugs.every(slug => selectedModeSlugs.value.includes(slug));

    if (allSelectedInGroup) {
        // Deselect all in group
        selectedModeSlugs.value = selectedModeSlugs.value.filter(slug => !categorySlugs.includes(slug));
    } else {
        // Select all in group (add missing ones)
        categorySlugs.forEach(slug => {
            if (!selectedModeSlugs.value.includes(slug)) {
                selectedModeSlugs.value.push(slug);
            }
        });
    }
}

// --- Watchers ---

// Watch for changes in individual selections to update group checkbox states
watch([selectedModeSlugs, groupedModes], () => {
    const newGroupState = {};
    for (const categoryName in groupedModes.value) {
        const modesInCategory = groupedModes.value[categoryName];
        if (modesInCategory.length === 0) continue; // Skip empty categories

        const categorySlugs = modesInCategory.map(mode => mode.slug);
        const selectedCount = categorySlugs.filter(slug => selectedModeSlugs.value.includes(slug)).length;

        if (selectedCount === 0) {
            newGroupState[categoryName] = 'unchecked';
        } else if (selectedCount === categorySlugs.length) {
            newGroupState[categoryName] = 'checked';
        } else {
            newGroupState[categoryName] = 'indeterminate';
        }
    }
    groupSelectionState.value = newGroupState;
}, { deep: true, immediate: true }); // Use deep watch and run immediately

</script>

<template>
  <div class="container">
    <h1>Roo Commander Mode Configurator</h1>
    <p>
      Welcome to the Roo Commander Mode Configurator! This tool allows you to select which predefined 'modes' (specialised AI roles) you want to include in your Roo Commander setup.
      Choose the modes relevant to your workflow, and the tool will generate the necessary JSON configuration array below. You can then copy this JSON and use it to customise your Roo Commander experience.
    </p>
    <p>
      For detailed explanations of each mode and how they work together, please refer to the main <a href="https://github.com/jezweb/roo-commander/blob/main/README.md" target="_blank" rel="noopener noreferrer">README.md</a> file in the repository.
    
    <strong>It is not recommended that you use all of these modes all at once. It will possibly overload your context window, cost more tokens and maybe cause errors with diffs, as per <a href="https://github.com/RooVetGit/Roo-Code/issues/2164">https://github.com/RooVetGit/Roo-Code/issues/2164</a>
    </strong></p>

    <!-- Version selector component -->
    <div class="version-selector">
      <h2>Template Version:</h2>
      <div class="version-dropdown" v-if="selectedVersion">
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
            {{ version.version }} - {{ version.summary }}
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

    <div class="controls">
      <button @click="selectAll">Select All</button>
      <button @click="deselectAll">Deselect All</button>
    </div>

    <div id="mode-selection-area">
      <div v-if="isLoading">Loading modes...</div>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="!isLoading && !error">
        <div v-for="(modesInCategory, categoryName) in groupedModes" :key="categoryName" class="category">
          <div v-if="modesInCategory.length > 0" class="category-header">
             <input
                type="checkbox"
                :id="'group-' + categoryName.replace(/\s+/g, '-')"
                :checked="groupSelectionState[categoryName] === 'checked'"
                :indeterminate="groupSelectionState[categoryName] === 'indeterminate'"
                @change="toggleGroupSelection(categoryName, modesInCategory)"
                class="group-checkbox"
              />
             <label :for="'group-' + categoryName.replace(/\s+/g, '-')" class="category-title">{{ categoryName }}</label>
          </div>
          <div class="mode-list">
            <label v-for="mode in modesInCategory" :key="mode.slug" class="mode-label">
              <input type="checkbox" :value="mode.slug" v-model="selectedModeSlugs">
              {{ mode.name }} ({{ mode.slug }})
              <span v-if="mode.description" class="mode-description"> - {{ mode.description }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <h2>Generated JSON Output:</h2>
    <textarea id="output-json" readonly :value="outputJson" placeholder="JSON output will appear here..."></textarea>
    <div class="output-controls">
      <button id="copy-button" @click="copyToClipboard">{{ copyButtonText }}</button>
    </div>

    <footer>
      <p>
        Part of the <a href="https://github.com/jezweb/roo-commander" target="_blank" rel="noopener noreferrer">Roo Commander</a> project.
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* General Styles */
body { /* Apply to body if this style isn't overridden by Vite's base styles */
  background-color: #f8f9fa; /* Light grey background */
  margin: 0; /* Remove default body margin */
}

.container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 30px;
  max-width: 960px; /* Slightly wider */
  margin: 20px auto; /* Add top/bottom margin */
  background-color: #ffffff; /* White background for the container */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0,0,0,0.1); /* Subtle shadow */
}

h1 {
  color: #343a40; /* Darker heading */
  text-align: center; /* Center heading */
  margin-bottom: 10px;
}
h2 {
    color: #495057; /* Slightly lighter heading */
    margin-top: 25px; /* More space above h2 */
    margin-bottom: 10px;
    border-bottom: 1px solid #dee2e6; /* Separator line */
    padding-bottom: 5px;
}
p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #6c757d; /* Grey text */
  text-align: center; /* Center paragraph */
}

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

/* Controls */
.controls {
  margin-bottom: 20px;
  text-align: center; /* Center buttons */
}

button {
  margin: 0 5px; /* Adjust margin */
  padding: 10px 18px; /* Slightly larger buttons */
  cursor: pointer;
  border: 1px solid #ced4da;
  background-color: #e9ecef; /* Lighter button background */
  color: #495057;
  border-radius: 4px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}
button:hover {
    background-color: #dee2e6; /* Darker hover */
    border-color: #adb5bd;
}
button:active {
    background-color: #ced4da;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}

/* Mode Selection Area */
#mode-selection-area {
  border: 1px solid #dee2e6; /* Lighter border */
  padding: 20px;
  margin-bottom: 25px;
  min-height: 150px; /* Increased min-height */
  max-height: 60vh; /* Use viewport height */
  overflow-y: auto;
  background-color: #fff; /* Ensure white background */
  border-radius: 4px; /* Match button radius */
}

.category {
  margin-bottom: 15px; /* Reduced margin */
  padding-bottom: 10px; /* Reduced padding */
  border-bottom: 1px solid #e9ecef; /* Lighter separator */
  text-align: left; /* Explicitly left-align content within category */
}
.category:last-child {
    border-bottom: none;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Space below header */
}

.group-checkbox {
  margin-right: 10px; /* Space between checkbox and title */
  cursor: pointer;
  width: 1.1em; /* Slightly larger checkbox */
  height: 1.1em;
}

.category-title {
  font-size: 1.2em; /* Slightly larger category titles */
  font-weight: 600; /* Semi-bold */
  color: #007bff; /* Use a primary color */
  margin: 0; /* Remove default margin */
  cursor: pointer; /* Make title clickable */
  flex-grow: 1; /* Allow title to take available space */
}

.mode-list {
    padding-left: 25px; /* Indent mode list */
}

.mode-label {
  display: block; /* Ensures labels are on new lines */
  margin-bottom: 8px; /* More space between labels */
  cursor: pointer;
  color: #495057;
  font-size: 0.95em; /* Slightly smaller mode text */
}
.mode-label:hover {
    background-color: #f8f9fa; /* Subtle hover for labels */
}
.mode-label input {
    margin-right: 10px; /* More space after checkbox */
    vertical-align: middle; /* Align checkbox nicely */
}
.mode-description {
    font-size: 0.85em;
    color: #6c757d;
    margin-left: 5px;
}

/* Output Area */
textarea {
  width: 100%;
  min-height: 300px; /* Taller textarea */
  margin-bottom: 15px;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace; /* Monospace font */
  font-size: 0.9em;
  border: 1px solid #ced4da;
  padding: 15px;
  border-radius: 4px;
  background-color: #e9ecef; /* Light background for contrast */
  color: #343a40;
}

.output-controls {
  margin-bottom: 15px;
  text-align: right; /* Align copy button to the right */
}

.error-message {
    color: #dc3545; /* Bootstrap danger color */
    font-weight: bold;
    background-color: #f8d7da; /* Light red background */
    border: 1px solid #f5c6cb; /* Red border */
    padding: 10px 15px;
    border-radius: 4px;
    margin-bottom: 15px;
}

/* Footer */
footer {
    margin-top: 30px;
    padding-top: 15px;
    border-top: 1px solid #dee2e6;
    text-align: center;
    font-size: 0.9em;
    color: #6c757d;
}
footer a {
    color: #007bff;
    text-decoration: none;
}
footer a:hover {
    text-decoration: underline;
}
</style>
