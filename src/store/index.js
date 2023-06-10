import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoading: true,
    products: [
      {
        isDiscount: false,
        isLiked: false,
        isTop: false,
        topRanking: null,
        title: 'Smart&Sassy',
        finalPrice: "1,200",
        marketingPrice: "1,500",
        imageUrl: "https://i.ibb.co/hLyxMNt/pro1.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: true,
        isFavorites: false,
        point: "12,50",
        selectCapacity: '',
        capacity: [20, 100]
      },
      {
        isDiscount: false,
        isLiked: false,
        isTop: false,
        topRanking: null,
        title: 'DDR prime',
        finalPrice: "3980",
        marketingPrice: "3980",
        imageUrl: "https://i.ibb.co/jLVBWwj/pro2.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: true,
        isFavorites: false,
        point: "8,00",
        selectCapacity: '',
        capacity: [10]
      },
      {
        isDiscount: false,
        isLiked: false,
        isTop: false,
        topRanking: null,
        title: 'lemon',
        finalPrice: "2980",
        marketingPrice: "4280",
        imageUrl: "https://i.ibb.co/kDJDNWG/pro3.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: true,
        isFavorites: false,
        point: "12,50",
        selectCapacity: '',
        capacity: [20]
      },
      {
        isDiscount: false,
        isLiked: false,
        isTop: false,
        topRanking: null,
        title: 'SmartSassy',
        finalPrice: "1,500",
        marketingPrice: "1,800",
        imageUrl: "https://i.ibb.co/SQVZj0g/pro4.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: true,
        point: "12,50",
        selectCapacity: '',
        capacity: [450, 100, 200]
      },
      {
        isDiscount: false,
        isLiked: false,
        isTop: false,
        topRanking: null,
        title: 'verage personalcare',
        finalPrice: "1860",
        marketingPrice: "1860",
        imageUrl: "https://i.ibb.co/9b757SV/pro5.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: true,
        point: "8,00",
        selectCapacity: '',
        capacity: [10]
      },
      {
        isDiscount: false,
        isLiked: false,
        isTop: false,
        topRanking: null,
        title: 'Breathe Respiratory Drops',
        finalPrice: "1200",
        marketingPrice: "1200",
        imageUrl: "https://i.ibb.co/h94X3MS/pro6.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: true,
        point: "12,50",
        selectCapacity: '',
        capacity: [20, 200]
      },
      {
        isDiscount: false,
        isLiked: false,
        isTop: true,
        topRanking: 5,
        title: 'Petal difusser',
        finalPrice: "7900",
        marketingPrice: "8550",
        imageUrl: "https://i.ibb.co/98K6jN7/pro7.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: true,
        point: "12,50",
        selectCapacity: '',
        capacity: [20, 150]
      },
      {
        isDiscount: true,
        isLiked: false,
        isTop: true,
        topRanking: 1,
        title: 'lemongrass',
        finalPrice: "1,980",
        marketingPrice: "2,200",
        imageUrl: "https://i.ibb.co/pfL9ry6/pro8.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: false,
        point: "12,50",
        selectCapacity: '',
        capacity: [20, 150]
      },
      {
        isDiscount: true,
        isLiked: false,
        isTop: true,
        topRanking: 2,
        title: 'Deepblue',
        finalPrice: "1,980",
        marketingPrice: "2,200",
        imageUrl: "https://i.ibb.co/mv24DXz/pro9.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: false,
        point: "12,50",
        selectCapacity: '',
        capacity: [20, 150]
      },
      {
        isDiscount: false,
        isLiked: false,
        isTop: true,
        topRanking: 3,
        title: 'salonessentials',
        finalPrice: "5,900",
        marketingPrice: "5,900",
        imageUrl: "https://i.ibb.co/ngTbc3V/pro10.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: true,
        point: "12,50",
        selectCapacity: '',
        capacity: [20, 150]
      },
      {
        isDiscount: false,
        isLiked: false,
        isTop: true,
        topRanking: 4,
        title: 'Spearmint',
        finalPrice: "1,980",
        marketingPrice: "1,980",
        imageUrl: "https://i.ibb.co/bFgQW00/pro11.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: false,
        point: "12,50",
        selectCapacity: '',
        capacity: [20, 150]
      },
      {
        isDiscount: true,
        isLiked: false,
        isTop: true,
        topRanking: 6,
        title: 'Verage Moisturizer',
        finalPrice: "980",
        marketingPrice: "1,200",
        imageUrl: "https://i.ibb.co/t3Bfn3W/pro12.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: false,
        point: "12,50",
        selectCapacity: '',
        capacity: [20, 150]
      },
      {
        isDiscount: true,
        isLiked: false,
        isTop: true,
        topRanking: 7,
        title: 'Deep Blue Oil',
        finalPrice: "792",
        marketingPrice: "1,365",
        imageUrl: "https://i.ibb.co/mBhFJHv/pro13.png",
        ingredient: "ingredient・pepper・ipsum",
        isTimeLimited: false,
        isFavorites: false,
        point: "12,50",
        selectCapacity: '',
        capacity: [20, 150]
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
