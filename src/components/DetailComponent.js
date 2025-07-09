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
      try {
        this.loading = true;
        // Fetch all items of the given type first
        const response = await fetch(`./src/data/${this.type}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const allItems = await response.json();
        // Find the specific item by ID
        this.item = allItems.find((item) => item.id === this.id);
        if (!this.item) {
          this.error = `Item with ID '${this.id}' not found in ${this.type}.`;
        }
      } catch (e) {
        console.error(`Error loading detail for ${this.type}/${this.id}:`, e);
        this.error = `Failed to load details. Please try again later.`;
      } finally {
        this.loading = false;
      }
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
        <img v-if="item.fullImage" :src="item.fullImage" :alt="item.name" class="detail-image">
        <p class="detail-description">{{ item.description }}</p>
        <div v-if="item.longDescription" class="long-description" v-html="item.longDescription"></div>
        <div class="project-links">
          <a v-if="item.projectUrl" :href="item.projectUrl" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          <a v-if="item.githubUrl" :href="item.githubUrl" class="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <!-- Add more detailed fields as needed from your JSON -->
      </div>
      <div v-else>
        <p>No details available for this item.</p>
      </div>
    </div>
  `,
};

export default DetailComponent;
