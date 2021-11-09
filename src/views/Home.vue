<template>
  <div class="home">
    <v-container>
      <div class="content-blog">
        <article v-for="article in articles" :key="article.id" class="article">
          <v-card>
            <div class="hover-wrapper">
              <v-img height="250"
                eager
                position="center center"
                :src="article.image.formats.small.url"
                @click="$router.push('/blog/'+article.slug)">
              </v-img>
            </div>
            <v-card-title>{{ article.title }}</v-card-title>
            <v-card-text>{{ article.description }}</v-card-text>
            <v-divider class="mt-3"></v-divider>
            <v-card-text class="px-1 py-0">
              <v-row class=" align-center justify-end" >
                
                <v-col sm="3">
                  <p class="mb-0 subtitle-1 py-1">Publicado em: {{ article.published_at | formatDate }}</p>
                </v-col>
                <v-col sm="1">
                  <p class="mb-0 subtitle-1 py-1">Por {{ article.author.name }}</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </article>
      </div>
    </v-container>
  </div>
</template>

<script>
// import BlogHome from '../views/BlogHome.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    // BlogHome
  },
  data() {
    return {
      
    }
  },
  computed:{
    articles(){
      return this.$store.state.articles
    }
  },
  created(){
    this.getArticles()
  },
  methods:{
    getArticles(){
      this.$store.dispatch("getArticles")
    }
  }
}
</script>
<style lang="scss">
.home{
  .hover-wrapper {
    display: block;
    position: relative;
    overflow: hidden;
  }

  .hover-wrapper .v-image {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .hover-wrapper:hover .v-image {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
