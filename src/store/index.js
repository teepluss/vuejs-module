import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import quotes from './modules/quotes'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// console.log(quotes)

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    quotes: quotes
  },
  strict: debug
})
