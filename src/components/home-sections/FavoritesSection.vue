<template>
  <section class="favorites stretch">
    <div class="section__bg"></div>
    <div class="section__block">
      <div class="title">
        <img src="../../assets/images/favorites-title.png" alt="">
      </div>
      <base-card mode="shadow-rounded">
        <ul>
          <li v-for="pro in handleFavorites" :key="pro.title">
            <img src="../../assets/images/promo-tag.png" alt="">
            <base-image>
              <img :src="pro.imageUrl" alt="">
            </base-image>
            <h3>{{ pro.title }}</h3>
            <p>{{ pro.ingredient }}</p>
            <base-price mode="line-through">{{ pro.marketingPrice }}</base-price>
            <div>
              <select v-model="pro.selectCapacity">
                <option
                  value=""
                  disabled
                  selected
                >
                  Capacity
                </option>
                <option v-for="(option, index) in pro.capacity" :key="index">{{ option }}</option>
              </select>
              <base-price mode="discount">{{ pro.finalPrice }}</base-price>
            </div>
            <div class="buttons">
              <base-button mode="btn-square">Add to Cart</base-button>
              <base-icon :svg-paths="storePaths" mode="like secondary-bg"></base-icon>
            </div>
          </li>
        </ul>
      </base-card>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const products = store.getters.getProducts;
    const isFavoritesProduct = computed(() => products.filter((pro) => pro.isFavorites === true));
    const handleFavorites = computed(() => isFavoritesProduct.value.slice(0, 4));

    const storePaths = computed(() => store.getters.getSvgPaths);

    return {
      handleFavorites,
      storePaths
    };
  },
};
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;
  margin-bottom: 104px;
}

ul {
  display: flex;
  justify-content: space-between;
  padding: 48px 0 26px;
  width: 100%;
}

li {
  padding: 16px 24px 20px;
  width: calc(25% - 15px);
  background-color: var(--gray-100);
}

h3,
p {
  text-align: center;
}

.title {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  text-align: center;
}

.section__bg {
  width: 100%;
  height: 226px;
  background-color: var(--primary-100);
  transform: translateY(18px);
}

.card {
  width: 100%;
  background-color: var(--gray-100);
  transform: translateY(50px);
}

.section__block {
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1280px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.btn-square {
  border-radius: 2px 0 0 2px;
}
</style>
