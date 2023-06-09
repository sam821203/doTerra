import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoading: true,
    products: [
      {
        isDiscount: false,
        isLiked: false,
        title: 'Smart&Sassy',
        finalPrice: "1,200",
        marketingPrice: "1,500",
        imageUrl: "https://i.ibb.co/hLyxMNt/pro1.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: true,
        isFavorites: false,
        point: "12,50",
        selectCapacity: '',
        capacity: [
          { val: '20' },
          { val: '100' },
        ]
      },
      {
        isDiscount: false,
        isLiked: false,
        title: 'DDR prime',
        finalPrice: "3980",
        marketingPrice: "3980",
        imageUrl: "https://i.ibb.co/jLVBWwj/pro2.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: true,
        isFavorites: false,
        point: "8,00",
        selectCapacity: '',
        capacity: [
          { val: '10' },
        ]
      },
      {
        isDiscount: false,
        isLiked: false,
        title: 'lemon',
        finalPrice: "2980",
        marketingPrice: "4280",
        imageUrl: "https://i.ibb.co/kDJDNWG/pro3.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: true,
        isFavorites: false,
        point: "12,50",
        selectCapacity: '',
        capacity: [
          { val: '20' }
        ]
      },
      {
        isDiscount: false,
        isLiked: false,
        title: 'SmartSassy',
        finalPrice: "1,500",
        marketingPrice: "1,800",
        imageUrl: "https://i.ibb.co/SQVZj0g/pro4.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: true,
        point: "12,50",
        selectCapacity: '',
        capacity: [
          { val: '450' },
          { val: '100' },
          { val: '200' },
        ]
      },
      {
        isDiscount: false,
        isLiked: false,
        title: 'verage personalcare',
        finalPrice: "1860",
        marketingPrice: "1860",
        imageUrl: "https://i.ibb.co/9b757SV/pro5.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: true,
        point: "8,00",
        selectCapacity: '',
        capacity: [
          { val: '10' }
        ]
      },
      {
        isDiscount: false,
        isLiked: false,
        title: 'Breathe Respiratory Drops',
        finalPrice: "1200",
        marketingPrice: "1200",
        imageUrl: "https://i.ibb.co/h94X3MS/pro6.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: true,
        point: "12,50",
        selectCapacity: '',
        capacity: [
          { val: '20' },
          { val: '200' },
        ]
      },
      {
        isDiscount: false,
        isLiked: false,
        title: 'Petal difusser',
        finalPrice: "7900",
        marketingPrice: "8550",
        imageUrl: "https://i.ibb.co/98K6jN7/pro7.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: true,
        point: "12,50",
        selectCapacity: '',
        capacity: [
          { val: '20' },
          { val: '150' },
        ]
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
    },
    getProducts(state) {
      return state.products;
    }
  }
});

export default store;
