<template>
    <v-app class="signUp">
            <v-container grid-list-xl text-center>

                <v-layout row wrap>
                    <v-flex >
                        <v-card dark class="card-signUp" elevation-24>
                            <v-card-text>
                                <h4 class="display-2 font-weight-bold">Criar conta</h4>
                                <hr>
                                <br>
                                <v-form>
                                    <v-text-field 
                                    clearable
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
                                    clearable
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
                                Ja possui conta?
                                <router-link to="/login">clique aqui</router-link>
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
    .signUp{
        // background-color: transparent !important;
        justify-content: center;
    }
    input{
        background-color: #1E1E1E !important;
        border: none !important;
    }
    .card-signUp{
        
        padding: 20px; 
        border: 1px; 
        border-radius: 50px;
        max-width: 400px;
    }

</style>