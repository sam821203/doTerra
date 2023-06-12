import { createStore } from 'vuex';

import products from './data/products.js';

const store = createStore({
  state: {
    isLoading: true,
    products: [...products],
  },
  actions: {
    toggleLike(context) {
      context.commit('toggleLike');
    },
    toggleCart(context) {
      context.commit('toggleCart');
    },
  },
  mutations: {
    toggleLike(state, productId) {
      const product = state.products.find((pro) => pro.id === productId);

      if (product) product.isLiked = !product.isLiked;
    },
    toggleCart(state, productId) {
      const product = state.products.find((pro) => pro.id === productId);

      if (product) product.inCart = !product.inCart;
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  }
});

export default store;
