<template>
  <section class="hero">
    <!-- fix here -->
    <swiper
      :space-between="80"
      :centered-slides="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      :slides-per-view="1.75"
      :slides-per-group="1"
      :initial-slide="1"
      :loop="true"
      :looped-slides="1.75"
      :watch-slides-progress="true"
      :watch-slides-visibility="true"
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

<style>
  .hero {
    padding: 2% 0;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    /* width: auto !important; */
    font-size: 18px;
    text-align: center;
    background: #fff;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
