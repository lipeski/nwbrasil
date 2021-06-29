<template>
    
    <v-container class="content">
        <v-row class="justify-space-between mx-2" align="center">
            <h3>Lista de guilds:</h3>
            <v-btn text @click="$router.push('/guild')">+ Crie sua guild</v-btn>
        </v-row>
        <div class="list-guilds">
            <v-row class="justify-space-around">
                <v-col v-for="guild in listOfGuilds" :key="guild.id" class="col-guild">
                    <v-card class="card" >
                        <header class="text-md-center">{{guild.name}}</header>
                        <v-row dense justify="space-between">
                            <v-col cols="auto">
                                <span>Facção: </span>
                                <span>{{guild.faction}}</span>
                            </v-col>
                            <v-col class="text-right">
                                <span>Focu: </span>
                                <span>{{guild.focus}}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <!-- <v-col>
                                <span>Recrutando? </span>
                                <span v-if="guild.recruting">Sim</span>
                                <span v-else>Não</span>
                            </v-col> -->
                            <v-col>
                                <span>Servidor:</span>
                                <span>NA</span>
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
        .col-guild{
            flex-grow: unset;
        }
    }
    .card{
        min-width: 300px;
        width: 100%;
        margin-top: 20px;
        padding: 10px 25px;
    }
</style>