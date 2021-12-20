import {RouteRecordRaw} from 'vue-router';

const endpoint = '/role';
export default [
  {
    path: endpoint,
    component: () => import('@/layouts/BasicLayout.vue'),
    children: [
      {
        path: '/role/role',
        name: 'Role',
        component: () => import('@/views/role/Role.vue')
      },
      {
        path: '/role/user',
        name: 'User',
        component: () => import('@/views/role/User.vue')
      },
    ]
  },
] as Array<RouteRecordRaw>;