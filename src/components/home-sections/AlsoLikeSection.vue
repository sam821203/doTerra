<template>
  <section class="also-like">
    <div>
      <h2>Product You May Also Like</h2>
      <h6>View more</h6>
    </div>
    <ul>
      <li v-for="pro in handleAlsoLike" :key="pro.title">
        <div class="icons">
          <base-icon
            :product-id="pro.id"
            :is-liked="pro.isLiked"
            mode="like secondary-bg"
          ></base-icon>
        </div>
        <base-image :image-url="pro.imageUrl"></base-image>
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
section {
  margin-bottom: 130px;
}

section > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

ul {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

li {
  position: relative;
  width: calc(20% - 16px);
}

.icons > button {
  position: absolute;
  right: 4%;
}

.img-wrap {
  margin-bottom: 20px;
  height: 240px;
  line-height: 240px;
}

.product__title {
  margin-bottom: 10px;
}

</style>
