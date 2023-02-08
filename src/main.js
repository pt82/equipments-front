// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import state from './store/auth'
// // import Axios from 'axios'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   state,
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
