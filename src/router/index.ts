import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/HomeView.vue'),
  }
];

routes.push({
  name: 'notFound',
  path: '/:pathMatch(.*)*',
  component: () => import('@/views/NotFound/NotFound.vue'),
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由护卫

router.beforeEach((to, from, next) => {
  console.log('to:', to);
  console.log('from:', from);
  next();
});

export default router;