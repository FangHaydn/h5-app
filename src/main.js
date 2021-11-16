import Vue from 'vue';
import router from './router'
import App from './App.vue';

import './styles/reset.css'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
