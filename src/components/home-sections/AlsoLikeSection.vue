<template>
  <section class="also-like">
    <div>
      <h2>Product You May Also Like</h2>
      <a href="javascript:void(0)">
        <h6>View more<img src="../../assets/images/angle-right.svg" alt=""></h6>
      </a>
    </div>
    <ul>
      <li
        v-for="pro in handleAlsoLike"
        :key="pro.title"
        class="product__block"
      >
        <div class="product__icons">
          <base-icon
            :product-id="pro.id"
            :is-liked="pro.isLiked"
            mode="like secondary-white-bg"
          ></base-icon>
          <base-icon
            :product-id="pro.id"
            :in-cart="pro.inCart"
            mode="cart secondary-white-bg"
          ></base-icon>
        </div>
        <div class="product__img">
          <base-image :image-url="pro.imageUrl"></base-image>
        </div>
        <h3 class="product__title">{{ pro.title }}</h3>
        <div class="product__price">
          <base-price v-if="pro.isDiscount" mode="line-through">{{ pro.marketingPrice }}</base-price>
          <base-price :is-discount="pro.isDiscount"><span class="currency">NT$</span>{{ pro.finalPrice }}</base-price>
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

h2 {
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 8px;
}

h6 > img {
  margin-left: 6px;
}

section > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.product__icons {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
}

.product__icons > button {
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

.product__img {
  padding-top: 30px;
  margin-bottom: 20px;
  width: 240px;
  height: 210px;
  background-color: var(--gray-200);
}

.product__price {
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
  height: 40px;
  flex-direction: column;
}

.product__block {
  transition: all .3s ease;
}

.product__block:hover {
  box-shadow: var(--box-shadow-2);
}
</style>
