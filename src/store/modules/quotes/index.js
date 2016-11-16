import * as types from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  quotes: [],
  title: 'Quotes'
}

const mutations = {
  [types.RECEIVE_QUOTES] (state, quotes) {
    state.quotes = quotes
  },
  [types.ADD_QUOTE] (state, quote) {
    // console.log('added')
    state.quotes.push({
      id: 999,
      name: 'CC'
    })
  },
  [types.CHANGE_QUOTE] (state, quote) {
    state.title = quote
  }
}

// console.log(actions)

export default {
  state,
  mutations,
  actions,
  getters
}
