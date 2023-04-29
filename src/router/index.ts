import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from '../pages/Home.vue';
import DashboardVue from '../pages/Dashboard.vue';

const routes = [
  { path: '/', component: HomeVue },
  { path: '/dashboard', component: DashboardVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
