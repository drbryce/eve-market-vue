import { staticDataController } from '../../controllers/staticDataController'

export const staticData = {
  namespaced: true,
  state: {
    systemList: []
  },
  mutations: {
    updateSystemList (state, systemList) {
      state.systemList = systemList
    }
  },
  actions: {
    updateSystemList (context) {
      console.log('call the thing')
      context.commit('updateSystemList', staticDataController.getSystemList())
    }
  },
  getters: {}
}
