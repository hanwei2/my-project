import {RouteRecordRaw} from 'vue-router';

const endpoint = '/dashBoard';
export default [
  {
    path: endpoint,
    component: () => import('@/layouts/BasicLayout.vue'),
    meta: {
      permissionUrl: '/dashBoard',
      title: '控制台'
    },
    children: [
      {
        path: endpoint,
        name: 'DashBoard',
        component: () => import('@/views/dashBoard/DashBoard.vue'),
        meta: {
          permissionUrl: '/dashBoard',
          title: '控制台'
        }
      }
    ]
  },
] as Array<RouteRecordRaw>;