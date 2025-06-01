// router/index.ts
import { RouteName } from '@/constants/route';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.homePage,
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/about',
    name: RouteName.aboutUs,
    component: () => import('@/views/AboutUs.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(), // history 模式
  routes,
});

export default router;
