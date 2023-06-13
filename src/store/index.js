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
    getIsDiscount(context) {
      context.commit('getIsDiscount');
    }
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
    getIsDiscount(state, productId) {
      const product = state.products.find((pro) => pro.id === productId);

      return product.isDiscount;
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  }
});

export default store;
