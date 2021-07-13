<template>
    
    <v-container class="content-guild-detail">
        <div>
            <router-link to="/home">Home</router-link> \ <router-link to="/guilds">guilds</router-link>
        </div>
        <v-row class="justify-space-between mx-2 name-guild" align="center">
            <v-col cols="8">
                <h2 >{{guild.name}}</h2>
            </v-col>
            

        </v-row>
        <div class="guild-detail mx-3">
            <v-row justify="center" align="center">
                <v-col>Facção: {{guild.faction}}</v-col>
                <v-col>Server: Não definido</v-col>
                <v-col>Recrutando? <span v-if="guild.recruiting">Sim</span><span v-else>Não</span></v-col>
                <v-col>Focu: {{guild.focus}}</v-col>
            </v-row>
            <v-row>
                <v-col>
                    <span class="guild-description" v-html="guild.description"></span>
                </v-col>
            </v-row>
        </div>
        <div class="d-flex">
            <v-btn
            v-if="guild.authorUID === currentUser.uid"
            class="mr-2"
            color="primary"
            fab
            small
            dark
            @click="$router.push('/guild?edit='+guildId)"
            >
            <v-icon>mdi-pencil</v-icon>
            </v-btn>
            
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
            guildId: '',
        }
    },
    created(){
        this.guildId = this.$route.params.id
        this.getGuildDetail()
    },
    computed: {
        guild (){
            return this.$store.state.guild
        },
        currentUser(){
            return this.$store.state.user
        }
    },
    methods:{
        getGuildDetail(){
            this.$store.dispatch('getGuildDetail', this.guildId)
        }
    }
}
</script>
<style lang="scss">
@media (min-width: 320px) {
    .content-guild-detail{
        border-radius: 5px;
        margin-top: 50px;
        background-color: rgba(8, 8, 8, 0.322);
        .guild-description{
            img{
                max-width: 100%;
                height: auto;
            }
        }
        .name-guild{
            h2{
                font-size: 30px;
            }
        }
    }
   
        
}
@media (min-width: 1024px) {
    .content-guild-detail{
        .name-guild{
            h2{
                font-size: 40px !important;
            }
        }
    }

}
</style>