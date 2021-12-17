import {Router} from 'vue-router';
import {getToken} from '@/utils/auth';
import { ConstantRouting } from './routerConfig'
import store from '@/store/index'
export const CONSTANT_ROUTES = ConstantRouting.map(i => i.path);
export const initRouterAuth = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const menu = (store as any).state.user.menu;
    if(menu.length == 0) {
      store.dispatch('user/reloadUserPermissions').then(() => {
        next({ ...to, replace: true })
      })
      return
    }
    const token = getToken();
    if (!token) {
      return next('/login');
    }
    console.log((store as any).state.user.menu)
    console.log(router.getRoutes())
    if (CONSTANT_ROUTES.includes(to.path)) {
      return next();
    }
    
    

    return next();
  });
};
