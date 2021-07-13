<template>
    <v-container class="content">
        <div>
            <router-link to="/home">Home</router-link> \ <router-link to="/guilds">guilds</router-link>
        </div>
        <div>
            <h2>Criar guild</h2>
        </div>
        <div class="mt-3" v-if="!isLogged">
            Você não está logado, para criar uma guild precisa fazer o <router-link to="/login"> login</router-link>, caso não tenha um login, <router-link to="/register">crie sua conta </router-link>.
        </div>
        <v-card-text v-else class="form-guild">
            <v-row>
                <v-col class="bg-transparent" cols="12" md="6" sm="9">
                    
                    <v-text-field
                        minlength="5"
                        maxlength="30"
                        v-model="newGuild.name"
                        :counter="30"
                        label="Nome da Guild"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="2"> 
                    <label for="recruiting" v-if="newGuild.recruiting">Recrutando</label>
                    <label for="recruiting" v-else>Não recrutando</label>
                    <v-switch
                        v-model="newGuild.recruiting"
                        id="recruiting"
                        class="mt-1"
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row>
                <v-col align-self="end">
                    <label for="server">Servidor(em breve):</label>
                    <v-select
                        solo
                        id="server"
                        :items="newGuild.server"
                        disabled
                    ></v-select>
                </v-col>
                <v-col align-self="end">
                    <label for="focus">Focu:</label>
                    <v-select
                        solo
                        class="focus"
                        id="focus"
                        :items="['PVP', 'PVE', 'PVX']"
                        v-model="newGuild.focus"
                    >
                    </v-select>
                </v-col>
                <v-col align-self="end">
                    <label for="size">Membros:</label>
                    <v-select
                        solo
                        class="focus"
                        id="size"
                        :items="['1-15', '16-30', '31-50', '+51']"
                        v-model="newGuild.size"
                    >
                    </v-select>
                </v-col>
                <v-col align-self="end">
                    <label for="faction">Facção:</label>
                    <v-select
                        solo
                        class="focus"
                        id="faction"
                        :items="['Saqueadores', 'Sindicato', 'Aliança', 'Não decidido']"
                        v-model="newGuild.faction"
                    >
                    </v-select>
                </v-col>
            </v-row>
            <v-row>
                <label for="editor"> Descrição: </label>
            </v-row>
            <v-row >
                <v-col id="description" class="description mx-3">
                    <vue-editor id="editor" 
                        useCustomImageHandler 
                        @image-added="handleImageAdded" 
                        v-model="newGuild.description"
                    ></vue-editor>
                </v-col>
            </v-row>
            <v-row align="end">
                <v-col cols="12" class="d-flex justify-end mt-5">
                    <v-btn text class="mr-2"> Voltar</v-btn>
                    <v-btn color="primary" depressed @click="createGuild()">Salvar</v-btn>
                </v-col>
            </v-row>

        </v-card-text>

    </v-container>
</template>
<script>
// import axios from 'axios'
import {VueEditor} from 'vue2-editor'
import firebase from 'firebase';
import imageCompression from 'browser-image-compression';
export default {
    name: 'create-guild',
    components: {
        VueEditor
    },
    data() {
        return {
            editorContent: '',
            newGuild: {
                name: '',
                recruiting: true,
                server: [],
                focus: '',
                size: 50,
                faction: '',
                description: ''
            },
            listFactions: ["Saqueadores", "Sindicato", "Aliança", "Não decidido"],
            editGuildId: ''
        }
    },
    computed: {
        isLogged (){
            if(this.$store.state.user.uid){
                return true
            }else{
                return false
            }
        },
    },
    created(){
        this.editGuildId = this.$route.query.edit
        if(this.editGuildId){
            this.getGuildDetail()
        }
    },
    methods:{
        getGuildDetail(){
            this.$store.dispatch('getGuildDetail', this.editGuildId).then(response => {
                console.log(response)
                this.newGuild = response
            }).catch(() => {
                return 'error'
            });
        },
        createGuild(){
            this.newGuild.id = this.editGuildId
            this.$store.dispatch('createGuild', this.newGuild).then(response => {
                //console.log(commit, response)
                this.$router.push('/guild/'+this.editGuildId)
                return response.data
            }).catch(() => {
                return 'error'
            });
        },
        handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            var imageFile = file
            var options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            }
            imageCompression(imageFile, options)
                .then(function (compressedFile) {
                    file = compressedFile

                    var formData = new FormData();
                    formData.append("image", file);
                    
                    // Create a root reference
                    var storageRef = firebase.storage().ref();

                    // Create a reference to 'mountains.jpg'
                    var mountainsRef = storageRef.child(file.name);

                    // Create a reference to 'images/mountains.jpg'
                    var mountainImagesRef = storageRef.child('uploads/'+file.name);

                    // While the file names are the same, the references point to different files
                    mountainsRef.name === mountainImagesRef.name            // true
                    mountainsRef.fullPath === mountainImagesRef.fullPath    // false
                    mountainImagesRef.put(file).then((response)=>{
                        response.ref.getDownloadURL().then(
                            function(downloadURL) {
                                // You get your url from here
                                console.log('File available at', downloadURL);
                                Editor.insertEmbed(cursorLocation, "image", downloadURL);
                                resetUploader();
                        });
                    })
            }).catch(function (error) {
                console.log(error.message);
            });
        }
    }
    
}
</script>
<style lang="scss">
.content{
    border-radius: 5px;
    margin-top: 50px;
    background-color: rgba(8, 8, 8, 0.322);
}
.v-text-field > .v-input__control > .v-input__slot:before {
    border-style: unset;
}
.v-select__selections{
    input{
        background: unset;
        border: none;
    }
}
.form-guild{
    .bg-transparent{
        .theme--dark.v-input input{
            background: #3d3d3d !important;
            padding-left: 10px;
        }
    }
}
.description{
    color: black;
    background-color: whitesmoke;
}
</style>