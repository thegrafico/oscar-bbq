import Vue from 'vue'

import Home from './pages/Home.vue'
import Asadores from './pages/Asadores.vue'
import Contacto from './pages/Contacto.vue'
import NotFound from './pages/404.vue'

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

// ========== ADDING Bootstrap ================

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const routes = {
  '/': Home,
  '/asadores': Asadores,
  '/contacto': Contacto,
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')


// new Vue({
//   render: h => h(App),
// }).$mount('#app')
