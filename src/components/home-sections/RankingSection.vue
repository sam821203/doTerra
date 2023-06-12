<template>
  <section class="ranking">
    <h2>Top 10 Ranking</h2>
    <div class="section__block">
      <swiper
        :slides-per-view="6"
        :space-between="20"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="pro in handleSortRanking"
          :key="pro.title"
          class="product"
        >
          <div class="product__badge">{{ pro.topRanking }}</div>
          <div class="icons">
            <!-- <base-icon mode="like secondary-bg"></base-icon> -->
          </div>
          <div class="product__img">
            <div class="img-wrap">
              <img :src="pro.imageUrl" alt="">
            </div>
          </div>
          <h3 class="product__title">{{ pro.title }}</h3>
          <h6 class="product__desc">{{ pro.ingredient }}</h6>
          <div class="product__price--discount">
            NT$
            <base-price mode="discount">{{ pro.finalPrice }}</base-price>
            <base-price mode="line-through">{{ pro.marketingPrice }}</base-price>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';

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

    return {
      modules: [Navigation],
      handleSortRanking: handleSortRanking.value
    };
  },
};
</script>

<style scoped>
section {
  margin-bottom: 124px;
}

h2 {
  margin-bottom: 16px;
}

.product {
  display: flex;
  flex-direction: column;
}

.section__block {
  border-top: 1px solid var(--gray-300);
}

.product__img {
  background-color: var(--gray-200);
}
</style>
