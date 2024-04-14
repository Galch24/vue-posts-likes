<template>
  <div>
    <h1>Список постов</h1>
    <PostList :posts="neutralPosts" />
    <h2>Избранное</h2>
    <PostList :posts="likePosts" emptyListMessage="Список пуст" />
    <h2>Список исключённого</h2>
    <PostList :posts="dislikePosts" emptyListMessage="Список пуст" />
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
    }),
    ...mapGetters({
      neutralPosts: "post/neutralPosts",
      likePosts: "post/likePosts",
      dislikePosts: "post/dislikePosts",
    }),
    neutralPosts2() {
      return this.posts.filter((item) => item.like === 0);
    },
    likePosts2() {
      return this.posts.filter((item) => item.like > 0);
    },
    dislikePosts2() {
      return this.posts.filter((item) => item.like < 0);
    },
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
