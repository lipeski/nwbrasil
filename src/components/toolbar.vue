<template>
    <div class="toolbar">
      <v-toolbar>
        <!-- Adjust the height to your needs, mine is 40 -->
        <img class="mr-3" :src="require('../assets/logo.svg')" height="40"/>
        <v-toolbar-title class="font-pica"> New world BR</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="font-pica hidden-sm-and-down">
            <v-btn text>Home</v-btn>
            <v-btn text>About</v-btn>
        </v-toolbar-items>
        <!-- <v-menu class="hidden-md-and-up"> -->
        <v-menu
          
          bottom
          left
        >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="hidden-md-and-up"
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          
      </v-toolbar>
    </div>
</template>
<script>
  export default {
    name: 'Toolbar',
    data() {
      return {
        items: [
          {rota: '/', title: 'Home'},
          {rota: '/about', title: 'Abount'}
        ]
      }
    }

  }
</script>