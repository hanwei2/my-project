import {RouteRecordRaw} from 'vue-router';

const endpoint = '/role';
export default [
  {
    path: endpoint,
    component: () => import('@/views/role/Role.vue'),
  },
] as Array<RouteRecordRaw>;