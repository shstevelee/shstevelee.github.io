// router/index.js - Vue Router setup

// Import VueRouter functions explicitly since it's loaded via importmap
import { createRouter, createWebHashHistory } from "vue-router";

// Import individual components using the @components alias
import HomeComponent from "../components/HomeComponent.js";
import ContentGridComponent from "../components/ContentGridComponent.js";
import DetailComponent from "../components/DetailComponent.js";
import AboutComponent from "../components/AboutComponent.js";
import ContactComponent from "../components/ContactComponent.js";

// Define your routes
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
  {
    path: "/creative",
    component: ContentGridComponent,
    props: { type: "creative" },
  },
  {
    path: "/research",
    component: ContentGridComponent,
    props: { type: "research" },
  },
  { path: "/about", component: AboutComponent },
  { path: "/contact", component: ContactComponent },
  // Dynamic route for detail pages
  { path: "/:type/:id", component: DetailComponent, props: true },
];

// Create the router instance
const router = createRouter({
  // Use createRouter from imported vue-router
  history: createWebHashHistory(), // Use createWebHashHistory from imported vue-router
  routes, // short for `routes: routes`
});

export default router;
