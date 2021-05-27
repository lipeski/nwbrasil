<template>
  <div class="login">
    <v-app>
      <v-card
      class="mx-auto"
      width="100%"
      max-width="400"
    >
      <v-card-title class="title justify-space-between">
        <h3>{{ currentTitle }}</h3>
        <v-avatar
          color="grey darken-2"
          class="subheading white--text"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>
  
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
            v-model="name"
            :counter="20"
            label="Nome"
            minlength="5"
            maxlength="20"
            required
            ></v-text-field>
            <v-text-field
            v-model="email"
            :rules="emailRules"
            :counter="50"
            label="Email"
            minlength="5"
            maxlength="50"
            required
            ></v-text-field>
          </v-card-text>
        </v-window-item>
  
        <v-window-item :value="2">
          <v-card-text>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="confirmPassword"
              :rules="passwordRules"
              label="Confirm Password"
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-row class="justify-center">
            <span v-if="passwordConfirmed">Senhas conferem <v-icon dark right>mdi-checkbox-marked-circle</v-icon></span>
            <span v-if="!passwordConfirmed && password && confirmPassword">Senhas não conferem!</span>
          </v-row>
        </v-window-item>
  
        <v-window-item :value="3">
          <div class="pa-4 text-center">
            <img :src="require('../assets/logo.svg')" height="80"/>
            <h3 class="title font-weight-light mb-2">
              Bem vindo ao New World BR
            </h3>
            <span class="caption grey--text">Obrigado por se registrar!</span>
          </div>
        </v-window-item>
      </v-window>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-btn
          v-if="step !== 1"
          text
          @click="step--"
        >
          Voltar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="step !== 3"
          color="primary"
          depressed
          @click="nextStep()"
        >
          Próximo
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import { required, email} from 'vuelidate/lib/validators'
import firebase from 'firebase';
  export default {
    name: 'Signup',
    data() {
      return {
        email: '',
        step: 1,
        name: '',
        rules: [
          value => !!value || 'Requirido.',
          value => (value && value.length >= 3) || 'Min 3 caracteres',
        ],
        emailRules: [
        v => !!v || 'Email is required',
        v => v.length >= 5 || 'The e-mail address must contain at least 5 characters',
        v => v.length <= 50 || 'The e-mail address cannot be longer than 50 characters',
        v => /.+@.+/.test(v) || 'Please enter a valid email address',
        ],
        password: '',
        confirmPassword: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length >= 8 || 'Password must contain at least 8 characters',
          v => v.length <= 50 || 'Password address cannot be longer than 50 characters',
        ],
      }
    },
    validations: {
      email:{
        required,
        email
      }
    },
    computed: {
      passwordConfirmed (){
        if(this.password && this.confirmPassword){
          return this.password === this.confirmPassword ? true : false
        }else{
          return false
        }
      },
      currentTitle () {
        switch (this.step) {
          case 1: return 'Registrar-se'
          case 2: return 'Criar senha'
          default: return 'Conta criada!'
        }
      },
    },
    methods:{
      nextStep(){
        if(this.step === 1){
          if(!this.$v.email.$invalid){
            this.step++
          }
        }
        else if(this.step === 2){
          if(this.passwordConfirmed && this.password && this.confirmPassword){
            this.signUp()
          }
        }
      },
      signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            console.log(user)
            this.step = 3
          },
          (err) => {
            alert('Aconteceu algo inesperado. ' + err.message)
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