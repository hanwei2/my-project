import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { initRouterAuth } from '@/router/auth';
import { ConstantRouting, AsynchronousRouting } from './routerConfig'
const routes: Array<RouteRecordRaw> = [
  ...ConstantRouting,
  ...AsynchronousRouting
]
console.log(AsynchronousRouting)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
initRouterAuth(router);
export default router
