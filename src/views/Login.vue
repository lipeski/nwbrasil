<template>
    <v-app class="login">
            <v-container grid-list-xl text-xs-center>
                <v-layout row wrap>
                    <v-flex>
                        <v-card dark color="dark" class="card-login" elevation-24>
                            <v-card-text>
                                <h4 class="display-2 font-weight-bold">Login</h4>
                                <hr>
                                <br>
                                <v-form>
                                    <v-text-field 
                                    v-model="username"
                                    label="Username"
                                    prepend-icon="mdi-face"
                                    type="text"
                                    @click:prepend="prependClicked"
                                    color="white"
                                    @click:append-outer="appendClicked"
                                    counter="10"
                                    >
                                    </v-text-field>
                                    <v-text-field 
                                    v-model="password"
                                    label="Password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    @click:prepend="prependClicked"
                                    color="white"
                                    @click:append-outer="appendClicked"
                                    >
                                    </v-text-field>
                                </v-form>
                            <br>
                            <v-btn color="grey darken-2" large>Enter</v-btn>
                            <p class="mt-2">
                                Não possui conta?
                                <router-link to="/signup">clique aqui</router-link>
                            </p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    mounted(){
        console.log(window.innerWidth)
    },
    methods: {
        prependClicked() {
            console.log('prepend clicked');
        },
        appendClicked() {
            console.log('append clicked', this.username);
        }
    }
}
</script>

<style lang="scss">
    .card-login{
        padding: 20px; 
        border: 1px; 
        border-radius: 50px;
        max-width: 400px;
    }

</style>