<template>
  <the-header></the-header>
  <hero-section></hero-section>
  <promo-section></promo-section>
  <flash-sale-section></flash-sale-section>
  <favorites-section></favorites-section>
  <ranking-section></ranking-section>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
import HeroSection from "../components/home-sections/HeroSection.vue";
import PromoSection from "../components/home-sections/PromoSection.vue";
import FlashSaleSection from "../components/home-sections/FlashSaleSection.vue";
import FavoritesSection from "../components/home-sections/FavoritesSection.vue";
import RankingSection from "../components/home-sections/RankingSection.vue";

export default {
  components: {
    TheHeader,
    HeroSection,
    PromoSection,
    FlashSaleSection,
    FavoritesSection,
    RankingSection,
  },

};
</script>
