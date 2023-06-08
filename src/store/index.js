import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoading: true,
    products: [
      {
        id: 'pro1',
        isDiscount: false,
        isLiked: false,
        title: 'JACKY WU日安玩美紅藜麥穀物粉',
        finalPrice: "3980",
        marketingPrice: "3980",
        imageUrl: "//media.etmall.com.tw/nximg/004437/4437502/4437502_lm.jpg?t=19264525661",
        ingredient: "ingredient・pepper・ipsum",
        point: "11,00"
      },
      {
        id: 'pro2',
        isDiscount: false,
        isLiked: false,
        title: '2 JACKY WU日安玩美紅藜麥穀物粉',
        finalPrice: "3980",
        marketingPrice: "3980",
        imageUrl: "//media.etmall.com.tw/nximg/004437/4437502/4437502_lm.jpg?t=19264525661",
        ingredient: "ingredient・pepper・ipsum",
        point: "11,00"
      },
      {
        id: 'pro3',
        isDiscount: false,
        isLiked: false,
        title: '3 JACKY WU日安玩美紅藜麥穀物粉',
        finalPrice: "3980",
        marketingPrice: "3980",
        imageUrl: "//media.etmall.com.tw/nximg/004437/4437502/4437502_lm.jpg?t=19264525661",
        ingredient: "ingredient・pepper・ipsum",
        point: "11,00"
      },
    ]
  },
  actions: {
    handleLiked(context) {
      context.commit('handleLikedState');
    }
  },
  mutations: {
    handleLikedState(state) {
      state.products[0].isLiked = !state.products[0].isLiked;
    }
  },
  getters: {
    isLiked(state) {
      return state.products[0].isLiked;
    }
    getProducts(state) {
      return state.products;
    }
  }
});

export default store;
