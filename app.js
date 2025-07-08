// 1. Define your components
// Home Component
const HomeComponent = {
  template: `
    <div class="section active vertical-center">
      <h1 class="name">Seunghyeok Lee</h1>
      <p class="intro">
        Hi! I'm Seunghyeok, a Sophomore at Carnegie Mellon University studying
        Electrical and Computer Engineering. My interests are in Classical and
        Flamenco Guitar, Weightlifting, Language Learning, Economics, Consumer
        Electronics, Computer Memory, Nanofabrication, ASICs and FPGAs
      </p>

      <div class="nav-buttons">
        <router-link to="/projects" class="nav-button">Projects</router-link>
        <router-link to="/events" class="nav-button">Events</router-link>
        <router-link to="/arts" class="nav-button">Arts</router-link>
        <router-link to="/certificates" class="nav-button">Certificates</router-link>
        <router-link to="/about" class="nav-button">About</router-link>
        <router-link to="/contact" class="nav-button">Contact</router-link>
      </div>

      <div class="resume-download">
        <a
          href="resumes/resume.pdf"
          class="resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
            />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  `,
};

// Generic Content Grid Component (for Projects, Events, Arts, Certificates)
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
        const response = await fetch(`${this.type}.json`);
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
      <div v-if="loading">Loading {{ type }}...</div>
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

// Generic Detail Component (for individual Project, Event, Art, Certificate)
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
        const response = await fetch(`${this.type}.json`);
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
      <div v-if="loading">Loading details...</div>
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

// About Component
const AboutComponent = {
  template: `
    <div class="section active vertical-center">
      <div class="back-button">
        <router-link to="/" class="nav-button">← Back</router-link>
      </div>
      <h1 class="name">About Me</h1>
      <div class="about-content">
        <h2>👨‍🎓🪫⚡</h2>
        <p>
          Hi! I'm Seunghyeok Lee, an Electrical and Computer Engineering
          student at Carnegie Mellon University with a strong passion for
          hardware systems and real-world problem solving. I'm especially
          interested in computer memory, nanofabrication, and building
          smarter, more efficient hardware that benefits people in meaningful
          ways.
        </p>
        <p>
          Beyond academics, I've had the chance to explore a wide range of
          experiences—from designing experiential marketing zones in Amman to
          founding a consulting firm with friends and engaging in a farm
          development project🌱. I'm always excited to learn, build, and
          collaborate—especially on projects that sit at the intersection of
          engineering, design, and social impact.
        </p>
        <h3>Skills</h3>
        <div class="skills-list">
          <span class="skill-tag">C/C++</span>
          <span class="skill-tag">GPIB</span>
          <span class="skill-tag">SCPI</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">LaTeX</span>
          <span class="skill-tag">Java</span>
          <span class="skill-tag">JS</span>
          <span class="skill-tag">CSS</span>
          <span class="skill-tag">HTML</span>
        </div>
      </div>
    </div>
  `,
};

// Contact Component
const ContactComponent = {
  template: `
    <div class="section active vertical-center">
      <div class="back-button">
        <router-link to="/" class="nav-button">← Back</router-link>
      </div>
      <h1 class="name">Contact</h1>
      <div class="contact-content">
        <p>Get in touch with me through any of these channels:</p>
        <div class="contact-info">
          <div class="contact-item">
            <strong>Email:</strong> seunghye[AT]andrew[dot]cmu[dot]edu
          </div>
          <div class="contact-item">
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/seunghyeok-lee/"
              >linkedin.com/in/seunghyeok-lee</a
            >
          </div>
          <div class="contact-item">
            <strong>GitHub:</strong>
            <a href="https://github.com/shstevelee">github.com/shstevelee</a>
          </div>
        </div>
      </div>
    </div>
  `,
};

// 2. Define your routes
const routes = [
  { path: "/", component: HomeComponent },
  {
    path: "/projects",
    component: ContentGridComponent,
    props: { type: "projects" },
  },
  {
    path: "/events",
    component: ContentGridComponent,
    props: { type: "events" },
  },
  { path: "/arts", component: ContentGridComponent, props: { type: "arts" } },
  {
    path: "/certificates",
    component: ContentGridComponent,
    props: { type: "certificates" },
  },
  { path: "/about", component: AboutComponent },
  { path: "/contact", component: ContactComponent },
  // Dynamic route for detail pages
  { path: "/:type/:id", component: DetailComponent, props: true },
];

// 3. Create the router instance
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(), // Using hash history for simpler deployment
  routes, // short for `routes: routes`
});

// 4. Create and mount the root instance
const app = Vue.createApp({});
app.use(router); // Use the router
app.mount("#app"); // Mount the app to the #app div in index.html
