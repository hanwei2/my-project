import Login from '@/router/constant/login';
import Role from '@/router/async/role/Role';
import DashBoard from '@/router/async/dashBoard/dashBoard';
import error404 from '@/router/constant/404';
/**
 * <必填>
 * 业务常量路由，也就是允许匿名访问的页面, meta: { anonymous: true }
 * 登录页面是默认要有的，业务上自行添加其他页面
 */
export const ConstantRouting = [
    ...Login,
    ...error404
]

/**
 * <必填>
 * 业务异步路由，也就是需要权限控制的页面，从服务端获取到用户授权菜单并控制展示
 * Home为登录成功后进入首页默认展示的菜单
 */
 export const AsynchronousRouting = [
    ...DashBoard,
    ...Role,
]