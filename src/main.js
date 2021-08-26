import Vue from 'vue'
import App from './App.vue'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
