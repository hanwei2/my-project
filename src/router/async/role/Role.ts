import {RouteRecordRaw} from 'vue-router';

const endpoint = '/role';
export default [
  {
    path: endpoint,
    component: () => import('@/layouts/BasicLayout.vue'),
    meta: {
      permissionUrl: '/role',
      title: '权限设置'
    },
    children: [
      {
        path: '/role/role',
        name: 'Role',
        component: () => import('@/views/role/Role.vue'),
        meta: {
          permissionUrl: '/role/role',
          title: '角色管理'
        }
      },
      {
        path: '/role/user',
        name: 'User',
        component: () => import('@/views/role/User.vue'),
        meta: {
          permissionUrl: '/role/user',
          title: '用户管理'
        }
      },
    ]
  },
] as Array<RouteRecordRaw>;