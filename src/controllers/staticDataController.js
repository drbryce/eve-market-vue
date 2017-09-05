import Vue from 'vue'
import { store } from '../store/store'

export const staticDataController = {
  getSystemList () {
    console.log('called staticDataController')
    Vue.http.get(store.state.apiUrl + '/staticdata/getsystemlistnowh', { headers: { token: store.state.token } }).then(
      (data) => {
        store.commit('staticData/updateSystemList', data.body)
      },
      (data, status, request) => {
        // handle error
      })
  }
}
