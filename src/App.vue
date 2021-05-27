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
    }
    background-image: url(assets/images/fundo.png);
    .content{
      padding-top: 10%;
    }
  }
</style>
<script>

// import Navbar from './components/Navbar';
import Toolbar from './components/toolbar';

export default {
  name: 'App',

  components: {
    // Navbar,
    Toolbar
  },

  data: () => ({
    //
  }),
};
</script>

