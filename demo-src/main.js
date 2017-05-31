// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import imgInputer from '../dist/VueImgInputer';
import imgInputer from '../src/index';

Vue.config.productionTip = false

Vue.component('imgInputer', imgInputer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
