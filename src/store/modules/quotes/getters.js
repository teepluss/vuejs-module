// export const allQuotes = state => state.quotes.all
// export const title = state => state.quotes.title

export default {
  quoteAll: state => {
    return state.quotes
  },
  quoteTitle: state => {
    return state.title
  }
}
