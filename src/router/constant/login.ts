import {RouteRecordRaw} from 'vue-router';

const endpoint = '/';

export default [
  {
    path: endpoint,
    component: () => import('@/views/login/Login.vue'),
    meta: { anonymous: true }
  },
] as Array<RouteRecordRaw>;
