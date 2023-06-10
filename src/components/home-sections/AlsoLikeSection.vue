<template>
  <section class="also-like layout--main m-bottom--xl">
    <div>
      <h2>Product You May Also Like</h2>
      <h6>View more</h6>
    </div>
    <ul class="also-like__block">
      <li v-for="pro in handleAlsoLike" :key="pro.title">
        <div class="icons">
          <base-like mode="secondary-bg"></base-like>
        </div>
        <div class="product__img">
          <img :src="pro.imageUrl" alt="">
        </div>
        <h3 class="product__title">{{ pro.title }}</h3>
        <base-price mode="line-through">{{ pro.marketingPrice }}</base-price>
        <div>
          NT$
          <base-price mode="discount">{{ pro.finalPrice }}</base-price>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const products = store.getters.getProducts;

    const isAlsoLikeProduct = computed(() => products.filter((pro) => pro.alsoLike === true));

    const handleAlsoLike = computed(() => isAlsoLikeProduct.value.slice(0, 5));

    return {
      handleAlsoLike
    };
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
}

li {
  position: relative;
  width: calc(20% - 16px);
}

.also-like__block {
  text-align: center;
}

.icons > button {
  position: absolute;
  right: 4%;
}

.product__img {
  margin-bottom: 20px;
  height: 240px;
  text-align: center;
  line-height: 240px;
}

.product__title {
  margin-bottom: 10px;
}

.also-like > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: end;
}
</style>
