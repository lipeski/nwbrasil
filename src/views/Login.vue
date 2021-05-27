<template>
  <div class="login-view">
    <v-container>
      <v-row align="center">
        <v-col align-self="center">
          <login v-if="!register"/>
          <sign-up v-else/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    SignUp,
    Login
  },
  data() {
    return {
      register: false,
    }
  },
  created(){
    console.log('uehuehe', this.$route.path)
    if(this.$route.path === '/register'){
      this.register = true
    }else{
      this.register = false

    }
  },
}
</script>
