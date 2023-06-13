<template>
  <section class="hero stretch">
    <swiper
      :centered-slides="true"
      :loop="true"
      :navigation=" {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :pagination="{
        clickable: true,
      }"
      :speed="1500"
      :modules="modules"
      :initial-slide="1"
      :breakpoints="{
        1920: {
          slidesPerView: 1.6,
          spaceBetween: 80,
        },
        1700: {
          slidesPerView: 1.45,
          spaceBetween: 80,
        },
        1600: {
          slidesPerView: 1.4,
          spaceBetween: 0,
        },
        1280: {
          slidesPerView: 1.15,
          spaceBetween: 40,
        }
      }"
      class="mySwiper"
    >
      <swiper-slide>
        <a href="">
          <img src="../../assets/images/slider-1.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="../../assets/images/slider-2.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="../../assets/images/slider-3.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="../../assets/images/slider-3.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="../../assets/images/slider-3.jpg" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
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
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
  height: 488px;
}

.swiper-slide {
  opacity: 0.25;
  transition: all .8s ease;
}

.swiper-slide.swiper-slide-active {
  opacity: 1;
}

.swiper-button-prev,
.swiper-button-next {
  top: 55%;
  justify-content: center;
  width: 60px;
  height: 101%;
  color: var(--gray-400);
  background-color: var(--gray-300);
  transform: translateY(-50%);
}

.swiper-button-prev::after,
.swiper-button-next::after {
  transform: scale(0.6);
}

.swiper-button-prev {
  left: 16.4%;
  box-shadow: -5px 0 24px 0 rgba(0, 0, 0, 0.08);
}

.swiper-button-next {
  right: 16.4%;
  box-shadow: 5px 0 24px 0 rgba(0, 0, 0, 0.08);
}

@media screen and (width <= 1700px) {
  .swiper-button-next {
    right: 14.4%;
  }
}
</style>
