import { createRouter, createWebHistory } from 'vue-router';
import Rows from '../pages/Rows.vue';
import RenderTest from '../pages/RenderTest.vue';
import CalculationTest from '../pages/CalculationsTest.vue';

const routes = [
  { path: '/', component: Rows },
  {
    path: '/render',
    component: RenderTest,
  },
  {
    path: '/calc',
    component: CalculationTest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
