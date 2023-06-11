import { createStore } from 'vuex';

import products from './data/products.js';
import svgPaths from './data/svg-paths.js';

const store = createStore({
  state: {
    isLoading: true,
    products: [...products],
    svgPaths: [...svgPaths]
  },
  actions: {
    handleLiked(context) {
      context.commit('handleLikedState');
    },
    handleCart(context) {
      context.commit('handleCartState');
    }
  },
  mutations: {
    handleLikedState(state) {
      state.products[0].isLiked = !state.products[0].isLiked;
    },
    handleCartState(state) {
      state.products[0].inCart = !state.products[0].inCart;
    }
  },
  getters: {
    isLiked(state) {
      return state.products[0].isLiked;
    },
    inCart(state) {
      return state.products[0].inCart;
    },
    getProducts(state) {
      return state.products;
    },
    getSvgPaths(state) {
      return state.svgPaths;
    }
  }
});

export default store;
