<template>
  <v-app id="app">
    <v-row class="toolbar">
      <Toolbar/>  
    </v-row>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
 @import '@/assets/styles/global-styles';

  #app{
    .toolbar{
      width: -webkit-fill-available;
      flex: none;
    }
    background-image: url(assets/images/fundo.png);
    .content{
      padding-top: 10%;
    }
  }
</style>
<script>

// import Navbar from './components/Navbar';
import firebase from 'firebase';
import Toolbar from './components/toolbar';
import store from './store'

export default {
  name: 'App',

  components: {
    // Navbar,
    Toolbar
  },

  data: () => ({
    //
  }),
  created(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        let currentUser = firebase.auth().currentUser;
        store.commit("setUser", currentUser)
      } else {
        // No user is signed in.
      }
    });
  }
};
</script>

