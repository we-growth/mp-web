import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/index' },
        // { exact: true, path: '/users', component: '@/pages/users' },
      ],
    },
    // { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
});
