import Vue from 'vue'
import VueRouter from 'vue-router'

// Components.
import App from './App'
import Foo from './components/pages/Foo'
import Bar from './components/pages/Bar'

// Veux store.
import store from './store'

Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  router,
  store,
  render (h) {
    return h(App)
  }
}).$mount('#app')
