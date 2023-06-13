<template>
  <section class="favorites stretch">
    <div class="section__bg"></div>
    <div class="section__block">
      <div class="title">
        <img src="../../assets/images/favorites-title.png" alt="">
      </div>
      <base-card mode="shadow-rounded">
        <ul>
          <li v-for="pro in displayFavorites" :key="pro.title">
            <img src="../../assets/images/promo-tag.png" alt="">
            <base-image>
              <img :src="pro.imageUrl" alt="">
            </base-image>
            <h3>{{ pro.title }}</h3>
            <p>{{ pro.ingredient }}</p>
            <div class="product__price">
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
              <div>
                <base-price v-if="pro.isDiscount" mode="line-through">{{ pro.marketingPrice }}</base-price>
                <base-price :is-discount="pro.isDiscount">{{ pro.finalPrice }}</base-price>
              </div>
            </div>
            <div class="product__buttons">
              <base-button mode="btn-square">Add to Cart</base-button>
              <base-icon
                :product-id="pro.id"
                :is-liked="pro.isLiked"
                mode="like primary-outline"
              ></base-icon>
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

    const favoritesProduct = computed(() => products.filter((pro) => pro.isFavorites === true));
    const displayFavorites = computed(() => favoritesProduct.value.slice(0, 4));

    return {
      displayFavorites,
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
  justify-content: space-evenly;
  padding: 48px 0 26px;
  width: 100%;
}

li {
  padding: 16px 0 20px;
  width: calc(25% - 30px);
  max-width: 264px;
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

.product__buttons {
  display: flex;
  justify-content: space-between;
}

.btn-square {
  border-radius: 2px 0 0 2px;
}

.product__price {
  display: flex;
  justify-content: space-between;
}
</style>
