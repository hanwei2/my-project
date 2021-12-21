import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { initRouterAuth } from '@/router/auth';
import { ConstantRouting, AsynchronousRouting } from './routerConfig'
import store from '@/store/index'

const routes: Array<RouteRecordRaw> = [
  ...ConstantRouting,
  ...AsynchronousRouting
]
console.log(AsynchronousRouting)
// const menu = (store as any).state.user.menu;
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// const menuList = (store as any).state.user.menu;

// const routerPackag = (routers: Array<any>) => {
//   routers.filter(itemRouter => {
//     console.log(itemRouter)
//     if (itemRouter.component != "Layout") {
//       router.addRoute("BasicLayout", {
//         path: `${itemRouter.path}`,
//         name: itemRouter.name,
//         component: () => import(`@/${itemRouter.component}`)
//       });
//     }
//     // 是否存在子集
//     if (itemRouter.children && itemRouter.children.length) {
//       routerPackag(itemRouter.children);
//     }
//     return true;
//   });
// };

// routerPackag(menuList)
// console.log(router.getRoutes())
// router.addRoute(routeObj)
initRouterAuth(router);
// console.log(router.getRoutes())
export default router
