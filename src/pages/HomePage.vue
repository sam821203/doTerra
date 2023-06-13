<template>
  <the-header></the-header>
  <hero-section></hero-section>
  <promo-section></promo-section>
  <flash-sale-section></flash-sale-section>
  <favorites-section></favorites-section>
  <ranking-section></ranking-section>
  <recommend-section></recommend-section>
  <also-like-section></also-like-section>
  <div class="product-line"></div>
  <div class="about-us"></div>
  <div class="shop-by-purpose"></div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
import HeroSection from "../components/home-sections/HeroSection.vue";
import PromoSection from "../components/home-sections/PromoSection.vue";
import FlashSaleSection from "../components/home-sections/FlashSaleSection.vue";
import FavoritesSection from "../components/home-sections/FavoritesSection.vue";
import RankingSection from "../components/home-sections/RankingSection.vue";
import RecommendSection from "../components/home-sections/RecommendSection.vue";
import AlsoLikeSection from "../components/home-sections/AlsoLikeSection.vue";
import TheFooter from "../components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    HeroSection,
    PromoSection,
    FlashSaleSection,
    FavoritesSection,
    RankingSection,
    RecommendSection,
    AlsoLikeSection,
    TheFooter
  },

};
</script>

<style scoped>
.product-line {
  height: 456px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-image: url('../assets/images/product-line.jpg');
}

.about-us {
  height: 662px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-image: url('../assets/images/about-us.jpg');
}

.shop-by-purpose {
  height: 401px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-image: url('../assets/images/shop-by-purpose.jpg');
}
</style>
