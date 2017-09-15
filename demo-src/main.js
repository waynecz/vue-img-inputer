import Vue from 'vue'
import App from './App'
import imgInputer from '../dist/VueImgInputer';

Vue.config.productionTip = false;

Vue.component('imgInputer', imgInputer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
