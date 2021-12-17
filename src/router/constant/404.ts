import {RouteRecordRaw} from 'vue-router';

const endpoint = '/404';

export default [
  {
    path: endpoint,
    component: () => import('@/views/error/404.vue'),
    meta: { anonymous: true }
  },
] as Array<RouteRecordRaw>;