<template>
  <div v-if="filteredPosts.length > 0">
    <post-item
      v-for="post in filteredPosts"
      :post="post"
      :key="post.id"
      :show-dislike="showDislike"
      :show-like="showLike"
      @on-like="$emit('on-like', post)"
      @on-dislike="$emit('on-dislike', post)"
    />
    <div class="flex flex-row mx-auto content-center justify-center mb-4 mt-4">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="rounded-md m-1 py-2 px-3 border-slate-400 border-solid border-2"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
  <div v-else class="text-slate-400">{{ emptyListMessage }}</div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
    emptyListMessage: {
      type: String,
      default: "Список публикаций пуст",
    },
    showLike: {
      type: Boolean,
      default: false,
    },
    showDislike: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      perPage: 5,
      page: 0,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.perPage);
    },
    filteredPosts() {
      return this.posts.slice(
        this.page * this.perPage,
        (this.page + 1) * this.perPage
      );
    },
  },
  methods: {
    changePage(pageNumber) {
      this.page = pageNumber - 1;
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
