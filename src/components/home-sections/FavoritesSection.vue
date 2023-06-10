<template>
  <section class="favorites m-bottom--xl">
    <div class="favorites__bg"></div>
    <div class="favorites__content layout--main">
      <div class="favorites__content--title">
        <img src="../../images/favorites-title.png" alt="">
      </div>
      <base-card class="favorites__content--box" mode="shadow-rounded">
        <ul>
          <li v-for="pro in handleFavorites" :key="pro.title" class="product">
            <div class="product__tag">
              <img src="../../images/promo-tag.png" alt="">
            </div>
            <a href="" class="product__img">
              <div class="img-wrap">
                <img :src="pro.imageUrl" alt="">
              </div>
            </a>
            <h3 class="product__title">{{ pro.title }}</h3>
            <p class="product__desc">{{ pro.ingredient }}</p>
            <base-price mode="line-through">{{ pro.marketingPrice }}</base-price>
            <div class="product__capacity">
              <select v-model="pro.selectCapacity">
                <option value="" disabled selected>Capacity</option>
                <option v-for="(option, index) in pro.capacity" :key="index">{{ option }}</option>
              </select>
              <base-price mode="discount">{{ pro.finalPrice }}</base-price>
            </div>
            <div class="product__cta">
              <base-button mode="btn-square">Add to Cart</base-button>
              <base-like mode="primary-outline"></base-like>
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

    const handleCapacity = computed(() => products.map((pro) => (Array.isArray(pro.capacity) ? pro.capacity.join(', ') : pro.capacity)));

    return {
      products,
      handleFavorites: handleFavorites.value,
      handleCapacity: handleCapacity.value
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

.img-wrap,
h3,
p {
  text-align: center;
}

.favorites__content--title {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  text-align: center;
}

.favorites__bg {
  width: 100%;
  height: 226px;
  background-color: var(--primary-100);
  transform: translateY(18px);
}

.favorites__content--box {
  width: 100%;
  background-color: var(--gray-100);
  transform: translateY(50px);
}

.favorites__content {
  position: absolute;
  top: 0;
  width: 100%;
}

.product__cta {
  display: flex;
  justify-content: space-between;
}

.btn-square {
  border-radius: 2px 0 0 2px;
}
</style>
