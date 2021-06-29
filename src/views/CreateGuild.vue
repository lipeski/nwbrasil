<template>
    <v-container class="content">
        <div>
            <h2>Criar guild</h2>
        </div>
        <div class="mt-3" v-if="!isLogged">
            Você não está logado, para criar uma guild precisa fazer o <router-link to="/login"> login</router-link>, caso não tenha um login, <router-link to="/register">crie sua conta </router-link>.
        </div>
        <div v-else class="form-guild">
            <v-row>
                <v-col cols="12" md="6" sm="9">
                    <v-text-field
                        v-model="newGuild.name"
                        :counter="30"
                        label="Nome da Guild"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="2"> 
                    <label for="recruting" v-if="newGuild.recruting">Recrutando</label>
                    <label for="recruting" v-else>Não recrutando</label>
                    <v-switch
                        v-model="newGuild.recruting"
                        id="recruting"
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
                        v-model="newGuild.size"
                    >
                    </v-select>
                </v-col>
            </v-row>
            <v-row >
                <v-col class="description mx-3">
                    <vue-editor id="editor" useCustomImageHandler @imageAdded="handleImageAdded" v-model="newGuild.description" />
                </v-col>
                {{newGuild.description}}
            </v-row>

        </div>

    </v-container>
</template>
<script>
import axios from 'axios'

export default {
    name: 'create-guild',
    data() {
        return {
            newGuild: {
                name: '',
                recruting: true,
                server: [],
                whatsapp: '',
                discord: '',
                focus: '',
                size: 50,
                faction: '',
                description: '',
                author: ''
            },
            listFactions: ["Saqueadores", "Sindicato", "Aliança", "Não decidido"]
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
    },
    methods:{
        handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
            // An example of using FormData
            // NOTE: Your key could be different such as:
            // formData.append('file', file)

            var formData = new FormData();
            formData.append("image", file);

            axios.post('/upload', formData)
                .then(result => {
                let url = result.data.url; // Get url from response
                console.log(result)
                Editor.insertEmbed(cursorLocation, "image", url);
                resetUploader();
                })
                .catch(err => {
                console.log(err);
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
.description{
    color: black;
    background-color: whitesmoke;
}
</style>