// ContentGridComponent.js
const ContentGridComponent = {
  props: ["type"], // 'type' will be 'projects', 'events', 'arts', 'certificates'
  data() {
    return {
      items: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    // Fetch data when the component is created
    await this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        this.loading = true;
        // Corrected fetch URL: Use the actual relative path from index.html to your data files
        const response = await fetch(`./src/data/${this.type}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.items = await response.json();
      } catch (e) {
        console.error(`Error loading ${this.type}:`, e);
        this.error = `Failed to load ${this.type}. Please try again later.`;
      } finally {
        this.loading = false;
      }
    },
  },
  template: `
    <div class="section active">
      <div class="back-button">
        <router-link to="/" class="nav-button">← Back</router-link>
      </div>
      <h1 class="name">{{ type.charAt(0).toUpperCase() + type.slice(1) }}</h1>
      <div v-if="loading" class="loader-container">
        <div class="loader"></div>
        <p>Loading {{ type }}...</p>
      </div>
      <div v-else-if="error" class="error-message">{{ error }}</div>
      <div v-else class="project-grid">
        <div v-for="item in items" :key="item.id" class="project-card">
          <img v-if="item.thumbnail" :src="item.thumbnail" :alt="item.name" class="project-thumbnail">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <div class="project-links">
            <router-link :to="'/' + type + '/' + item.id" class="project-link">See More</router-link>
          </div>
        </div>
      </div>
      <div v-if="!loading && !error && items.length === 0">
        <p>No {{ type }} found. Coming soon!</p>
      </div>
    </div>
  `,
};

export default ContentGridComponent;
