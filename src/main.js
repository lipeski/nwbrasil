import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import firebase from "firebase"

  var firebaseConfig = {
    apiKey: "AIzaSyC-S4pHEZkEhHBSVRVsGrosweG6rTWvSlY",
    authDomain: "nwbrasil-ffb64.firebaseapp.com",
    databaseURL: "https://nwbrasil-ffb64.firebaseio.com",
    projectId: "nwbrasil-ffb64",
    storageBucket: "nwbrasil-ffb64.appspot.com",
    messagingSenderId: "461398272722",
    appId: "1:461398272722:web:e426eb6792886106411b0b",
    measurementId: "G-QNLLW6ZMVC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.use(vuetify);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
