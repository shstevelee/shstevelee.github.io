// DetailComponent.js
const DetailComponent = {
  props: ["type", "id"], // 'type' and 'id' from route parameters
  data() {
    return {
      item: null,
      loading: true,
      error: null,
    };
  },
  async created() {
    await this.fetchItemDetail();
  },
  watch: {
    // Watch for changes in route parameters to re-fetch data
    "$route.params.id": "fetchItemDetail",
    "$route.params.type": "fetchItemDetail",
  },
  methods: {
    async fetchItemDetail() {
      this.loading = true;
      this.error = null; // Clear previous errors
      this.item = null; // Clear previous item data

      try {
        // Corrected fetch URL: Use the actual relative path from index.html to your data files
        const response = await fetch(`./src/data/${this.type}.json`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const allItems = await response.json();

        // Find the specific item by ID
        this.item = allItems.find((item) => item.id === this.id);

        if (!this.item) {
          this.error = `Item with ID '${this.id}' not found in ${this.type}. Please check the ID or JSON data.`;
          console.error(this.error);
        }
      } catch (e) {
        console.error(`Error loading detail for ${this.type}/${this.id}:`, e);
        this.error = `Failed to load details for ${this.type}/${this.id}. Please try again later. Error: ${e.message}`;
      } finally {
        this.loading = false;
      }
    },
    // Helper to get keys for iterating over links object
    getLinkKeys(linksObject) {
      return Object.keys(linksObject || {});
    },
  },
  template: `
    <div class="section active">
      <div class="back-button">
        <router-link :to="'/' + type" class="nav-button">← Back to {{ type.charAt(0).toUpperCase() + type.slice(1) }}</router-link>
      </div>
      <div v-if="loading" class="loader-container">
        <div class="loader"></div>
        <p>Loading details...</p>
      </div>
      <div v-else-if="error" class="error-message">{{ error }}</div>
      <div v-else-if="item" class="detail-content">
        <h1 class="name">{{ item.name }}</h1>
        
        <div v-if="item.images && item.images.length > 0">
          <img v-for="(image, index) in item.images" :key="index" :src="image" :alt="item.name + ' Image ' + (index + 1)" class="detail-image">
        </div>
        
        <p class="detail-description">{{ item.description }}</p>
        <div v-if="item.longDescription" class="long-description" v-html="item.longDescription"></div>
        
        <div class="project-links" v-if="item.links && getLinkKeys(item.links).length > 0">
          <a v-for="key in getLinkKeys(item.links)" :key="key" :href="item.links[key]" class="project-link" target="_blank" rel="noopener noreferrer">
            {{ key }}
          </a>
        </div>
      </div>
      <div v-else>
        <p>No details available for this item.</p>
      </div>
    </div>
  `,
};

export default DetailComponent;
