<template>
  <div v-if="posts.length > 0">
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @on-like="$emit('on-like', post)"
      @on-dislike="$emit('on-dislike', post)"
    />
    <div class="paginator">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
  <h2 v-else style="color: red">Список публикаций пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
import { mapActions, mapState } from "vuex";
export default {
  components: { PostItem },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      totalPages: (state) => state.post.totalPages,
      page: (state) => state.post.page,
    }),
  },
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),
    changePage(pageNumber) {
      this.fetchPosts({ pageNumber });
    },
  },
};
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
.paginator {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
</style>