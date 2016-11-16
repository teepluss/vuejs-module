import * as types from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  all: [],
  title: 'Quotes'
}

const mutations = {
  [types.RECEIVE_QUOTES] (state, quotes) {
    state.all = quotes
  },
  [types.ADD_QUOTE] (state, quote) {
    // console.log('added')
    state.all.push({
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
