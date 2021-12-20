import {Router} from 'vue-router';
import {getToken} from '@/utils/auth';
import { ConstantRouting, AsynchronousRouting } from './routerConfig'
import store from '@/store/index'
interface menuItem {
  path: string,
  id: number,
  name: string,
  parentId?: number
}

export const CONSTANT_ROUTES = ConstantRouting.map(i => i.path);
export const initRouterAuth = (router: Router) => {
  const menu = (store as any).state.user.menu;
  console.log(AsynchronousRouting)
  const hasPermission = (toPath:string) => {
    const menuUris = menu.map((i:menuItem) => i.path === toPath)
    return menuUris.length > 0
  }

  router.beforeEach((to, from, next) => {
    if(!hasPermission(to.path)) {
      return
    }

    const token = getToken();
    if (!token) {
      return next('/login');
    }

    if(menu.length == 0) {
      store.dispatch('user/reloadUserPermissions').then(() => {

        next({ ...to, replace: true });
      })
      return
    }
    
    if (CONSTANT_ROUTES.includes(to.path)) {
      return next();
    }
    return next();
  });
};
