<template>
    <div class="toolbar">
      <v-toolbar>
        <!-- Adjust the height to your needs, mine is 40 -->
        <img class="mr-3" :src="require('../assets/new_world_br_logo.png')" height="45"/>
        <!-- <v-toolbar-title class="font-pica"> New world BR</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-toolbar-items class="font-pica hidden-sm-and-down">
          <div class="d-flex align-center">
            <v-btn @click="$router.push('/guilds')" text>Guilds</v-btn>
          </div>
          <div class="d-flex align-center">
            <span class="mx-2">|</span>
          </div>
          <div v-if="!isLogged" class="d-flex align-center">
            <div v-for="(item, index) in items" :key="index">
              <v-btn @click="$router.push(item.rota)" text>{{item.title}}</v-btn>
            </div>
          </div>
          <div v-else class="d-flex align-center">
            <v-icon>mdi-account-circle</v-icon>
            <h3 class="ml-2">{{currentUser.displayName}}</h3>
            <v-btn @click="logout()" class="font-pica" text>Sair</v-btn>

          </div>

        </v-toolbar-items>
        <!-- <v-menu class="hidden-md-and-up"> -->
        <v-menu
          
          bottom
          left
        >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="hidden-md-and-up"
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title @click="$router.push('/guilds')">Guilds</v-list-item-title>
              </v-list-item>
              <div v-if="!isLogged">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-title @click="$router.push(item.rota)">{{ item.title }}</v-list-item-title>
                </v-list-item>
              </div>
              <v-list-item v-else>
                <v-list-item-title @click="logout()">Sair</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          
      </v-toolbar>
    </div>
</template>
<script>
import firebase from 'firebase';
import store from '@/store'

  export default {
    name: 'Toolbar',
    data() {
      return {
        items: [
          {rota: '/login', title: 'Login'},
          {rota: '/register', title: 'Registrar-se'}
        ],
      }
    },
    computed:{
      isLogged(){
        return this.$store.state.user.email !== undefined
      },
      currentUser(){
        return this.$store.state.user
      }
    },
    methods:{
      logout(){
        console.log('Saaaair')
        firebase.auth().signOut().then(()=>{
          store.commit("setUser", {})
        })
      }
    }

  }
</script>