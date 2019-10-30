import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Storage from '@/utils/Storage'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'control',
          name: 'control',
          component: () => import(/* webpackChunkName: "Control" */ './views/Control.vue'),
        },
        {
          path: 'assets',
          name: 'assets',
          component: () => import(/* webpackChunkName: "Assets" */ './views/Assets.vue'),
        },
        {
          path: 'analysis',
          name: 'analysis',
          component: () => import(/* webpackChunkName: "Analysis" */ './views/Analysis.vue'),
        },
        {
          path: 'scheme',
          name: 'scheme',
          component: () => import(/* webpackChunkName: "Scheme" */ './views/Scheme.vue'),
        },
        {
          path: 'import',
          name: 'import',
          component: () => import(/* webpackChunkName: "Import" */ './views/Import.vue'),
        },
        {
          path: 'notice',
          name: 'notice',
          component: () => import(/* webpackChunkName: "Notice" */ './views/Notice.vue'),
        },
      ]
    }
  ],
});

/* 拦截全局路由resolve钩子 */
// router.beforeResolve((to, from, next) => {
//   const toPath = to.path
//   const loginPath = '/'
//   const hasLogin = Boolean(Storage.get('userName'))

//   if (hasLogin || toPath == loginPath) {
//     next()
//   } else {
//     console.warn('请先登录')
//     next(loginPath)
//   }
// })
export default router
