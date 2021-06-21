import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    guilds: []
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setGuilds(state, payload){
      state.guilds = payload
    }
  },
  actions: {
    getGuilds({commit}){
      return axios.get(`/guilds`).then(response => {
        commit('setGuilds', response.data)
        return response.data
      }).catch(() => {
        return 'error'
      });
    },
  },
  modules: {
  }
})
