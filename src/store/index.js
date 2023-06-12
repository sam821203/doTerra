import { createStore } from 'vuex';

import products from './data/products.js';

const store = createStore({
  state: {
    isLoading: true,
    products: [...products],
  },
  actions: {
    handleLiked(context) {
      context.commit('handleLikedState');
    },
    handleCart(context) {
      context.commit('handleCartState');
    },
    toggleLike(context) {
      context.commit('toggleLike');
    },
    toggleCart(context) {
      context.commit('toggleCart');
    },
    handleIsLike(context) {
      context.commit('handleIsLike');
    }
  },
  mutations: {
    handleLikedState(state) {
      state.products[0].isLiked = !state.products[0].isLiked;
    },
    toggleLike(state, productId) {
      const product = state.products.find((pro) => pro.id === productId);

      if (product) product.isLiked = !product.isLiked;
    },
    toggleCart(state, productId) {
      const product = state.products.find((pro) => pro.id === productId);

      if (product) product.inCart = !product.inCart;
    },
    handleCartState(state) {
      state.products[0].inCart = !state.products[0].inCart;
    }
  },
  getters: {
    // isLiked(state, productId) {
    //   const product = state.products.find((pro) => pro.id === productId);
    //   console.log(product);
    //   return product;
    // },
    // inCart(state) {
    //   return state.products[0].inCart;
    // },
    getProducts(state) {
      return state.products;
    },
  }
});

export default store;
