<template>
  <div class="login-view">
    <v-container>
      <v-row align="center">
        <v-col align-self="center">
          <Login/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Login from '../components/Login.vue'

// @ is an alias to /src

export default {
  name: 'Login-view',
  components: {
    Login
  },
}
</script>
