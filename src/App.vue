<template>
  <v-app id="app">
    <!-- <Navbar/> -->
    <Leftbar/>

    
    <router-view/>
  </v-app>
</template>

<style lang="scss">
  #app{
    background-image: url(assets/images/fundo.png);
  }
</style>
<script>
// import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';

export default {
  name: 'App',

  components: {
    // Navbar,
    Leftbar
  },

  data: () => ({
    //
  }),
};
</script>
