<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div>
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post-actions">
      <my-button @click="handleLike(post.id)"> Лайк </my-button>
      <my-button @click="handleDislike(post.id)"> Дизлайк </my-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      setPostLike: "post/setPostLike",
      setPostDislike: "post/setPostDislike",
    }),
    handleLike(id) {
      this.setPostLike(id);
    },
    handleDislike(id) {
      this.setPostDislike(id);
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post-actions {
  display: flex;
}
</style>
