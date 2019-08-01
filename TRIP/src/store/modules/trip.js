import * as types from '../mutations-types'

export default {
  state: {
    user: null,
    userDistance: null
  },
  getters: {
    user: state => state.user,
    userDistance: state => state.userDistance
  },
  mutations:{
    [types.SET_USER] () {
      this.state.user = this.data
    }
  },
  actions: {
    setUser(store, data) {
      store.commit(types.SET_USER, data)
    }
  }
}

