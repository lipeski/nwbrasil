import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    guilds: [],
    articles: [],
    guild: {}
  },
  mutations: {
    setUser(state, payload){
      if(payload.email !== undefined){
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`
        }).catch(function(error) {
          console.log(error)
        });
      }
      state.user = payload
    },
    setGuilds(state, payload){
      state.guilds = payload
    },
    setGuild(state, payload){
      state.guild = payload
    },
    setArticles(state, payload){
      state.articles = payload
    },
  },
  /* eslint-disable */

  actions: {
    getArticles({commit}){
      return axios.get('https://api-newworldbr.herokuapp.com/articles', {
        headers: {
        'Authorization': ''
        }}).then(response => {
        let articles = response.data
        commit('setArticles', articles)
        return response.data
      }).catch(() => {
        return 'error'
      });
    },
    getGuilds({commit}){
      return axios.get(`/guilds`).then(response => {
        let guilds = response.data
        commit('setGuilds', guilds)
        return response.data
      }).catch(() => {
        return 'error'
      });
    },
    getGuildDetail({commit}, id){
      return axios.get(`/guild/`+ id).then(response => {
        let guild = response.data
        commit('setGuild', guild)
        return response.data
      }).catch(() => {
        return 'error'
      });
    },
    createGuild({commit}, payload){
      if(payload.id){
        return axios.put(`/guild/`+payload.id, payload).then(response => {
          let guild = response.data
          return guild
        }).catch(() => {
          return 'error'
        });
      }else{
        return axios.post(`/guilds`, payload).then(response => {
          let guild = response.data
          return guild
        }).catch(() => {
          return 'error'
        });
      }
    }
    /* eslint-enable */
  },
  modules: {
  }
})
