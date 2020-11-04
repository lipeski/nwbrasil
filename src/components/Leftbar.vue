<template>
  <div class="left-bar">
    <v-card>
      
    </v-card>
    <v-navigation-drawer
      permanent
      disable-resize-watcher
    >
      <div class="content-menu">
        <v-list>
          <v-list-item>
            <v-list-item-content>
                <v-img src="https://d2lchq0n03yu65.cloudfront.net/statics/2020-06-25/images/NW-bug.svg" width="50px"></v-img>
              <v-row justify="center" class="hidden-sm-and-down">
                <h2>New World Br</h2>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list
          class="ml-1"
          nav
          dense
        >
          
          <v-list-item link :to="'/'">
            <v-list-item-icon>
              <v-img src="@/assets/icons/011-fortress.png" contain width="50px" height="50px"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          
          <v-list-item link>
            <v-list-item-icon>
              <v-img src="@/assets/icons/guia.png" contain width="50px" height="50px"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Guias</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-img src="@/assets/icons/020-mace.png" contain width="50px" height="50px"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Armas</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-img src="@/assets/icons/008-knight.png" contain width="50px" height="50px"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Equipamentos</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-img src="@/assets/icons/miner.png" contain width="50px" height="50px"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Craft</v-list-item-title>
          </v-list-item>
          
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<style lang="scss">
 @import '@/assets/styles/global-styles';
  .content-menu{
    align-content: center;
    .v-list-item .v-list-item__title{
      line-height: 4rem !important;
    }
  }
  .left-bar{
    height: 100%;
  }
  .theme--dark.v-navigation-drawer {
    // background-color: #212121 !important;
    background-color:rgba(0, 0, 0, 0.64) !important;
    
 }
</style>
<script>
  export default {
    name: 'Navbar',

  }
</script>
