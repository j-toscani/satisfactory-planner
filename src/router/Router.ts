import { createRouter, createWebHistory } from 'vue-router';
import Rows from '../pages/Rows.vue';
import RenderTest from '../pages/RenderTest.vue';

const routes = [
  { path: '/', component: Rows },
  {
    path: '/render',
    component: RenderTest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
