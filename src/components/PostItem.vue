<template>
  <div class="post flex max-w-2xl mx-auto bg-white rounded-md shadow-md">
    <div>
      <div>{{ post.id }}</div>
      <div>
        <router-link
          class="text-slate-900 font-medium"
          :to="`/posts/${post.id}`"
          >{{ post.title }}</router-link
        >
      </div>
      <div class="text-slate-700 font-small">{{ post.body }}</div>
    </div>
    <div class="flex">
      <primary-button v-if="showLike" @click="handleLike(post.id)">
        <like-icon />
      </primary-button>
      <primary-button v-if="showDislike" @click="handleDislike(post.id)">
        <dislike-icon />
      </primary-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LikeIcon from "@/components/icons/LikeIcon";
import DislikeIcon from "@/components/icons/DislikeIcon";

export default {
  name: "PostItem",
  components: { DislikeIcon, LikeIcon },
  props: {
    post: {
      type: Object,
      required: true,
    },
    showLike: {
      type: Boolean,
    },
    showDislike: {
      type: Boolean,
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
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}
.post-actions {
  display: flex;
}
</style>
