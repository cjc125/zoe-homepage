// router/index.ts
import { RouteName } from '@/constants/route';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

type routeConfigItem = RouteRecordRaw & {
  meta?: {
    title?: string;
  };
}

const routeConfigs: routeConfigItem[] = [
  {
    path: '/',
    name: RouteName.aboutUs,
    component: () => import('@/views/AboutUs.vue'),
    meta: {
      title: 'About Us',
    },
  },
  {
    path: '/china-made-equipment',
    name: RouteName.chinaGoods,
    component: () => import('@/views/ChinaGoods.vue'),
    meta: {
      title: 'China-Made Equipment',
    },
  },
  {
    path: '/canada-made-food',
    name: RouteName.canadaGoods,
    component: () => import('@/views/CanadaGoods.vue'),
    meta: {
      title: 'Canada-Made Food',
    },
  },
  {
    path: '/import-export-agency',
    name: RouteName.agency,
    component: () => import('@/views/AgencyPage.vue'),
    meta: {
      title: 'Import & Export Agency',
    },
  },
  {
    path: '/biz-assistance',
    name: RouteName.assistance,
    component: () => import('@/views/AssistancePage.vue'),
    meta: {
      title: 'BIZ Assistance',
    },
  },
  {
    path: '/contact-us',
    name: RouteName.contactUs,
    component: () => import('@/views/ContactUs.vue'),
    meta: {
      title: 'Contact Us',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(), // history 模式
  routes: routeConfigs,
});

export default router;
export { routeConfigs };
