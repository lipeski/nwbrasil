<template>
  <div class="home">
    <div class="blog-list-post">
      <blog-home/>
    </div>
  </div>
</template>

<script>
import BlogHome from '../views/BlogHome.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    BlogHome
  }
}
</script>
