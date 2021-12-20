import {RouteRecordRaw} from 'vue-router';

const endpoint = '/dashBoard';
export default [
  {
    path: endpoint,
    component: () => import('@/layouts/BasicLayout.vue'),
    children: [
      {
        path: endpoint,
        name: 'DashBoard',
        component: () => import('@/views/dashBoard/DashBoard.vue'),
      }
    ]
  },
] as Array<RouteRecordRaw>;