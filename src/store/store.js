import Vue from 'vue'
import Vuex from 'vuex'
import { staticData } from './modules/staticdata'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    staticData
  },
  state: {
    user: '',
    apiUrl: 'http://localhost:3000'
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
