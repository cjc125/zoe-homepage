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
    path: '/home',
    name: RouteName.home,
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about-us',
    name: RouteName.aboutUs,
    component: () => import('@/views/AboutUsPage.vue'),
    meta: {
      title: 'About Us',
    },
  },
  {
    path: '/system-integration',
    name: RouteName.systemIntegration,
    component: () => import('@/views/SystemIntegrationPage.vue'),
    meta: {
      title: 'System Integration',
    },
  },
  {
    path: '/production',
    name: RouteName.production,
    component: () => import('@/views/ProductionPage.vue'),
    meta: {
      title: 'Production',
    },
  },
  {
    path: '/news',
    name: RouteName.news,
    redirect: '/news/detail',
    meta: {
      title: 'News',
    },
    children:[
      {
        path: '/news/detail',
        name: RouteName.newsList,
        component: () => import('@/views/news/NewsListPage.vue'),

      },
      {
        path: '/news/detail/:id',
        name: RouteName.newsDetail,
        component: () => import('@/views/news/NewsDetailPage.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/contact-us',
    name: RouteName.contactUs,
    component: () => import('@/views/ContactUsPage.vue'),
    meta: {
      title: 'Contact Us',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(), // history 模式
  routes: routeConfigs,
});

export default router;
export { routeConfigs };
