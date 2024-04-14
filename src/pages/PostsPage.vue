<template>
  <div>
    <h1>Список постов</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
    }),
  },
  mounted() {
    this.fetchPosts({ pageNumber: 1, limit: 20 });
  },
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),
  },
};
</script>

<style scoped></style>
