<template>
  <section class="favorites m-bottom--xl">
    <div class="favorites__bg"></div>
    <div class="favorites__content layout--main">
      <div class="favorites__content--title">
        <img src="../../images/favorites-title.png" alt="">
      </div>
      <base-card class="favorites__content--box" mode="shadow-rounded">
        <ul>
          <li v-for="product in isFavoritesProduct" :key="product.title">
            <div>PROMO</div>
            <a href="">
              <div class="img-wrap">
                <img :src="product.imageUrl" alt="">
              </div>
            </a>
            <h3>{{ product.title }}</h3>
            <p>{{ product.ingredient }}</p>
            <base-price mode="line-through">{{ product.marketingPrice }}</base-price>
            <div>
              <select v-model="product.selectCapacity">
                <option value="" disabled selected>Capacity</option>
                <option v-for="(option, index) in product.capacity" :key="index">{{ option }}</option>
              </select>
              <base-price mode="discount">{{ product.finalPrice }}</base-price>
            </div>
            <base-button mode="btn-square">Add to Cart</base-button>
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

    const handleCapacity = computed(() => products.map((pro) => (Array.isArray(pro.capacity) ? pro.capacity.join(', ') : pro.capacity)));

    return {
      products,
      isFavoritesProduct: isFavoritesProduct.value,
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
  padding-bottom: 16%;
}

ul {
  display: flex;
  justify-content: space-between;
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
  padding: 48px 24px 26px;
  width: 100%;
  background-color: var(--gray-100);
  transform: translateY(50px);
}

.favorites__content {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
