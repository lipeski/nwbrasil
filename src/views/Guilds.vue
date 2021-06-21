<template>
    
    <v-container class="content">
        <h3>Guilds here</h3>
        <div class="list-guilds">
            <v-row>
                <v-col v-for="guild in listOfGuilds" :key="guild.id">
                    <v-card class="card">
                        <header class="text-md-center">{{guild.name}}</header>
                        <v-row dense justify="space-between">
                            <v-col>
                                <span>Facção: </span>
                                <span>{{guild.faction}}</span>
                            </v-col>
                            <v-col cols="4" class="text-right">
                                <span>Focu: </span>
                                <span>{{guild.focus}}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col>
                                <span>Recrutando? </span>
                                <span>
                                    <v-icon v-if="guild.recruting" dark right>mdi-checkbox-marked-circle</v-icon>
                                    <v-icon v-else dark right>mdi-cancel</v-icon>
                                </span>
                            </v-col>
                            <v-col cols="4">
                                <span>Tamanho:</span>
                                <span>{{guild.size}}</span>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
    
</template>
<script>
export default {
    name: 'Guilds',
    components: {
        
    },
    data() {
        return {
            listGuilds: [],
        }
    },
    created(){
        this.getListOfGuilds()
    },
    computed: {
        listOfGuilds (){
            return this.$store.state.guilds
        },
    },
    methods:{
        getListOfGuilds(){
            this.$store.dispatch('getGuilds')
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
    .list-guilds{
        display: flex;
    }
    .card{
        max-width: 320px;
        margin: auto;
        padding: 10px;
    }
</style>