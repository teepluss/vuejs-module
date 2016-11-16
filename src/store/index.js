import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import quotes from './modules/quotes'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// console.log(quotes)

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    users: users,
    quotes: quotes
  },
  strict: debug
})
