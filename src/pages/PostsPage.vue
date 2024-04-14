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
      totalPages: (state) => state.post.totalPages,
      page: (state) => state.post.page,
    }),
  },
  mounted() {
    this.fetchPosts({ pageNumber: 1 });
  },
  methods: {
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
  },
};
</script>

<style scoped></style>
