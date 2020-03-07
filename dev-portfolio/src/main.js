import Vue from 'vue'
import App from './components/App/App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
