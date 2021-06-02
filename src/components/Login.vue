<template>
  <div class="login">
    <v-app>
      <v-card
      class="mx-auto"
      width="100%"
      max-width="400"
    >
      <v-card-title class="title justify-space-between">
        <h3>Entrar</h3>
      </v-card-title>
  
      <v-window>
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
            v-model="email"
            label="Email"
            required
            ></v-text-field>
            <v-text-field
            v-model="password"
            label="Senha"
            type="password"
            required
            ></v-text-field>
          </v-card-text>
        </v-window-item>
      </v-window>
      <v-alert type="success" value="true" v-if="confirmLogin">
        Logado
      </v-alert>
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-btn
          @click="$router.push('/')"
        >
          Voltar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          depressed
          @click="login()"
        >
          Entrar
        </v-btn>
      </v-card-actions>
      </v-card>
      
    </v-app>
  </div>
</template>
<script>
import firebase from 'firebase';
  export default {
    name: 'Login',
    data() {
      return {
        confirmLogin: false,
        email: '',
        password: '',
      }
    },
    methods:{
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.confirmLogin = true
            console.log(user)
            let currentUser = firebase.auth().currentUser  
            this.$store.commit("setUser", currentUser)     
            setTimeout(() => this.confirmLogin = false, this.$router.push('/'), 3000);
            
          },
          (err) => {
            alert('Não foi possível realizar o login. ' + err.message)
          }
        );
      },
    }

  }
</script>
<style lang="scss">
.login{
  .theme--dark.v-text-field > .v-input__control > .v-input__slot:before,
  .v-text-field.v-input--has-state > .v-input__control > .v-input__slot:before {
    border-color: transparent !important;
  }
  .v-text-field.v-input__control.v-input__slot:before{
    border-color: unset!important;
  }
  .v-label{
    left: 10px !important;
  }
  .v-label--active{
    color:white !important;
  }
  .theme--dark.v-input input{
    background: #3d3d3d !important;
    padding-left: 10px;
  }
}
</style>