import axios from "axios";

export const posts = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    searchQuery: "",
    page: 1,
    limit: 5,
    totalPages: 0,
    sortOptions: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По содержимому" },
    ],
  }),
  getters: {},
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setPostLike(state, id) {
      state.posts = state.posts.map((item) => ({
        ...item,
        ...{ like: item.id === id ? 1 : item.like },
      }));
    },
    setPostDislike(state, id) {
      state.posts = state.posts.map((item) => ({
        ...item,
        ...{ like: item.id === id ? -1 : item.like },
      }));
    },
  },
  actions: {
    async fetchPosts({ state, commit }, { pageNumber }) {
      const pageNum = pageNumber || 1;
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: pageNum,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit(
          "setPosts",
          response.data.map((item) => {
            return {
              ...item,
              ...{ like: 0 },
            };
          })
        );
        commit("setPage", pageNum);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    setPostLike({ commit }, id) {
      commit("setPostLike", id);
    },
    setPostDislike({ commit }, id) {
      commit("setPostDislike", id);
    },
  },
  namespaced: true,
};
