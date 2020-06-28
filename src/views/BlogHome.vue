<script>
  import { butter } from '@/buttercms'
  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'Blog',
        posts: [],
        show: false,
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    }
  }
</script>

<template>
    <div id="blog-home">
        <div v-for="(post,index) in posts"
        :key="post.slug + '_' + index">

            <v-card
                class="mx-auto"
                max-width="80%"
            >
                <v-img
                v-if="post.featured_image"
                :src="post.featured_image"
                alt=""
                height="200px"
                ></v-img>

                <v-card-title>
                    <router-link :to="'/blog/' + post.slug">
                        {{ post.title }}
                    </router-link>
                </v-card-title>

                <v-card-subtitle>
                {{post.summary}}
                </v-card-subtitle>

                <v-card-actions>
                <v-btn text>Share</v-btn>

                <v-btn
                    color="purple"
                    text
                >
                    Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="show = !show"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
        </div>
        <!-- END CARD BLOG -->


      <!-- <h1>{{ page_title }}</h1> -->
      <!-- Cria `v-for` e aplica um `key`, usando uma combinação do slug e index. -->
      <!-- <div
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index">
        <router-link :to="'/blog/' + post.slug">
          <article class="media">
            <figure>
              
              <img
                v-if="post.featured_image"
                :src="post.featured_image"
                alt="">
              <img
                v-else
                src="http://via.placeholder.com/250x250"
                alt="">
            </figure>
            <h2>{{ post.title }}</h2>
            <p>{{ post.summary }}</p>
          </article>
        </router-link>
      </div> -->
  </div>
</template>