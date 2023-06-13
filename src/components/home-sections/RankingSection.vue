<template>
  <section class="ranking">
    <h2>Top 10 Ranking</h2>
    <div class="section__block">
      <swiper
        :slides-per-view="6"
        :space-between="20"
        :navigation=" {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :speed="1000"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="pro in handleSortRanking"
          :key="pro.title"
          class="product"
        >
          <div v-if="isTopThree(pro.topRanking)" class="product__badge top-three">
            <span>{{ pro.topRanking }}</span>
          </div>
          <div v-else class="product__badge">
            <span>{{ pro.topRanking }}</span>
          </div>
          <div class="product__icons">
            <base-icon
              :product-id="pro.id"
              :is-liked="pro.isLiked"
              mode="like secondary-white-bg"
            ></base-icon>
            <base-icon
              :product-id="pro.id"
              :in-cart="pro.inCart"
              mode="cart secondary-white-bg"
            ></base-icon>
          </div>
          <div class="product__block">
            <div class="product__img">
              <base-image :image-url="pro.imageUrl"></base-image>
            </div>
            <h3 class="product__title">{{ pro.title }}</h3>
            <h6 class="product__desc">{{ pro.ingredient }}</h6>
            <div class="product__price">
              <base-price v-if="pro.isDiscount" mode="line-through">{{ pro.marketingPrice }}</base-price>
              <base-price :is-discount="pro.isDiscount"><span class="currency">NT$</span>{{ pro.finalPrice }}</base-price>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    const products = store.getters.getProducts;

    const handleRanking = computed(() => products.filter((pro) => pro.isTop === true));
    // Vue 並不追蹤對於響應式數據的直接修改，要用 slice 來做淺拷貝，儘管這裡不會修改到屬性值
    const handleSortRanking = computed(() => handleRanking.value.slice().sort((a, b) => a.topRanking - b.topRanking));

    const isTopThree = (topRanking) => {
      if (topRanking <= 3) return true;

      return false;
    };

    return {
      modules: [Autoplay, Navigation],
      handleSortRanking,
      isTopThree
    };
  },
};
</script>

<style scoped>
section {
  position: relative;
  margin-bottom: 124px;
}

h2 {
  margin-bottom: 16px;
}

h3 {
  margin-bottom: 8px;
}

h6 {
  margin-bottom: 18px;
}

.product {
  display: flex;
  flex-direction: column;
}

.section__block {
  padding: 32px 44px 0;
  height: 360px;
  border-top: 1px solid var(--gray-300);
}

.product__block {
  width: 100%;
  transform: translateY(2.2%);
  transition: all .3s ease;
}

.product__img {
  padding: 6%;
  margin-bottom: 20px;
  background-color: var(--gray-200);
}

.product__badge {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 48px;
  height: 46px;
  text-align: center;
  color: var(--gray-100);
  background-repeat: no-repeat;
  line-height: 46px;
  background-image: url("../../assets/images/ranking-badge-2.svg");
}

.top-three {
  background-image: url("../../assets/images/ranking-badge-1.svg");
}

.product__badge > span {
  margin-right: 18%;
}

.product__icons {
  position: absolute;
  top: 16px;
  right: 12px;
  z-index: 1;
}

.product__block:hover {
  box-shadow: var(--box-shadow-2);
}

.product__price {
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
  height: 40px;
  flex-direction: column;
}

.swiper-slide {
  justify-content: start;
}

.swiper-button-prev,
.swiper-button-next {
  top: 57%;
  width: 4%;
  height: 100%;
  transform: translateY(-50%) scale(0.6);
}

.swiper-button-prev {
  left: 0;
  justify-content: start;
  color: var(--gray-400);
}

.swiper-button-next {
  right: 0;
  justify-content: end;
  color: var(--secondary-100);
}
</style>
