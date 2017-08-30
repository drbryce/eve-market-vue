import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
  },
  state: {
    user: ''
  },
  mutations: {
    logOut (state) {
      state.user = ''
    },
    logIn (state) {
      state.user = 'test'
    }
  },
  actions: {
  }
})
