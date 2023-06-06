<template>
  <section class="hero">
    <swiper
      :space-between="30"
      :centered-slides="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <a href="">
          <img src="https://source.unsplash.com/random/1160x488/?wallpaper" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="https://source.unsplash.com/random/1160x488/?wallpaper" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="https://source.unsplash.com/random/1160x488/?wallpaper" alt="">
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
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
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
