import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{}
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
  },
  actions: {
    // saveUser({commit}, payload){
    //   return axios.post(`/user`, payload).then(response => {
    //     commit('setUser', response.data)
    //     return response.data
    //   }).catch(() => {
    //     return 'error'
    //   });
    // },
  },
  modules: {
  }
})
