<template>
  <v-app id="app">
    <v-row>
      <v-col cols="2" class="pa-0">
        <Leftbar/>
      </v-col>
      <v-col cols="10" class="pa-0">
        <router-view/>
      </v-col>
    </v-row >
   
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

export default {
  name: 'App',

  data: () => ({
    viewportWidth: window.innerWidth
    //
  }),
  created(){
    console.log('tamanho de tela ==', window.innerWidth)
  }
};
</script>
