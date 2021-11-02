import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    { path: '/login', exact: true, component: '@/pages/login/index' },
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      wrappers: ['@/wrappers/auth'],
      routes: [{ exact: true, path: '/', component: '@/pages/index' }],
    },
  ],
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
});
