import '../css/main.scss';
import Vue from 'vue'
import App from '../components/App.vue'
//import router from './router'

var app = new Vue({
  el: '#app',
//  router,
  template: '<App/>',
  components: { App }
})