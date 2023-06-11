<template>
  <section class="expand">
    <swiper
      :space-between="80"
      :centered-slides="true"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      :slides-per-view="1.75"
      class="mySwiper"
    >
      <swiper-slide>
        <a href="">
          <img src="../../images/slider-1.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="../../images/slider-2.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="../../images/slider-3.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="../../images/slider-3.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="../../images/slider-3.jpg" alt="">
        </a>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  }
};
</script>

<style scoped>
  section {
    padding: 2% 0;
  }
</style>
