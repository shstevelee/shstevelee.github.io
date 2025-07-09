// main.js - Main application entry point

// Import Vue and VueRouter explicitly since they are loaded via importmap
import { createApp } from "vue";
import router from "./router/index.js"; // Import the router instance using the alias

// Import the root Vue component
import App from "./App.js"; // Keep this relative if App.js is in the same directory as main.js

// Create and mount the Vue application
const app = createApp(App); // Use createApp from imported Vue
app.use(router); // Use the router
app.mount("#app"); // Mount the app to the #app div in index.html
