import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/HomePage.vue'
import Profile from '../views/ProfilePage.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;