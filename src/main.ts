import Vue from 'vue';
import Component from 'vue-class-component'
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/css/index.css'

Component.registerHooks([
  'beforeRouteEnter',//进入路由之前
  'beforeRouteLeave',//离开路由之前
  'beforeRouteUpdate'
])

Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
