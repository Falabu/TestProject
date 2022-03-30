import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () =>
      import('@/app/main.vue'),
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
