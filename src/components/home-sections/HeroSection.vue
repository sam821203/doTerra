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
        renderBullet: customRenderBullet
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :speed="1500"
      :modules="modules"
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
          slidesPerView: 1.08,
          spaceBetween: 80,
        }
      }"
      class="mySwiper"
    >
      <swiper-slide>
        <a href="javascript:void(0)">
          <img src="../../assets/images/slider-1.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0)">
          <img src="../../assets/images/slider-2.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0)">
          <img src="../../assets/images/slider-3.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0)">
          <img src="../../assets/images/slider-4.jpg" alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0)">
          <img src="../../assets/images/slider-5.jpg" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
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
    const customRenderBullet = () => `<span class="dot swiper-pagination-bullet"></span>`;

    return {
      customRenderBullet,
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

.swiper-button-next.swiper-button-disabled {
  opacity: 1;
}

.swiper-button-prev,
.swiper-button-next {
  top: 55.5%;
  justify-content: center;
  width: 60px;
  height: 102%;
  color: var(--gray-400);
  background-color: var(--gray-300);
  transform: translateY(-50%);
}

.swiper-button-prev::after,
.swiper-button-next::after {
  transform: scale(0.6);
}

.swiper-button-prev {
  left: -0.9%;
  box-shadow: -5px 0 24px 0 rgba(0, 0, 0, 0.08);
}

.swiper-button-next {
  right: -0.9%;
  box-shadow: 5px 0 24px 0 rgba(0, 0, 0, 0.08);
}

@media screen and (width >= 1280px){
  .swiper-button-prev,
  .swiper-button-next {
    top: 55%;
    height: 101%;
  }

  .swiper-button-prev{
    left: 2.6%;
  }

  .swiper-button-next{
    right: 2.6%;
  }
}

@media screen and (width >= 1400px){
  .swiper-button-prev{
    left: 6.2%;
  }

  .swiper-button-next{
    right: 6.2%;
  }
}

@media screen and (width >= 1600px){
  .swiper-button-prev{
    left: 13%;
  }

  .swiper-button-next{
    right: 13%;
  }
}

@media screen and (width >= 1800px){
  .swiper-button-prev{
    left: 16.45%;
  }

  .swiper-button-next{
    right: 16.45%;
  }
}
</style>
