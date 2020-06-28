<template>
  <v-app id="app">
    <!-- <Navbar/> -->
    <v-row>
      <v-col cols="2" class="pa-0">
        <Leftbar/>  
      </v-col>
      <v-col cols="10" class="content">
        <router-view/>
      </v-col>
    </v-row>
  </v-app>
</template>

<style lang="scss">
  #app{
    background-image: url(assets/images/fundo.png);
    .content{
      padding-top: 10%;
    }
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
