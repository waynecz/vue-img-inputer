import Vue from 'vue/dist/vue.esm'
import App from './App'
import imgInputer from '../src/index.js'

Vue.component('ImgInputer', imgInputer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
