import * as types from './mutations'

const quotes = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' }
]

// export const getAllQuotes = ({ commit }) => {
//   commit(types.RECEIVE_QUOTES, quotes)
// }

// export const addQuote = ({ commit }, quote) => {
//   commit(types.ADD_QUOTE, quote)
// }

// export const changeTitle = ({ commit }, e) => {
//   commit(types.CHANGE_QUOTE, e.target.value)
// }

export default {
  getAllQuotes ({ commit }) {
    commit(types.RECEIVE_QUOTES, quotes)
  },

  addQuote ({ commit }, quote) {
    commit(types.ADD_QUOTE, quote)
  },

  changeQuoteTitle ({ commit }, e) {
    commit(types.CHANGE_QUOTE, e.target.value)
  }
}
