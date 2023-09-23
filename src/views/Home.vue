<template>
  <div class="home">
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.index">
        <SinglePost :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";

// @ is an alias to /src

export default {
  name: "Home",
  components: { SinglePost },
  data() {
    return {
      posts: [],
    };
  },
};
</script>
