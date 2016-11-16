export default {
  state: {
    users: []
  },
  mutations: {
    'users/ADD_USER' (state, user) {
      state.users.push(user)
    }
  },
  actions: {
    addUser ({ state, commit }, user) {
      commit('users/ADD_USER', user)
    }
  },
  getters: {
    userIsPattanai (state) {
      return state.users.filter((user) => {
        return user.name === 'Pattanai'
      })
    }
  }
}
