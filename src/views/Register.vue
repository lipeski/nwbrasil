<template>
  <div class="login-view">
    <v-container>
      <v-row align="center">
        <v-col align-self="center">
          <SignUp/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue'

export default {
  name: 'Register',
  components: {
    SignUp,
  },
}
</script>
