<template>
  <section class="flash-sale">
    <div class="section__title">
      <div>
        <p>One-time use code for <span>$10 off</span> of a $25 purchase!</p>
        <h2>Countdown</h2>
      </div>
      <div class="countdown">
        <div>
          <img src="../../images/lightning.svg" alt="">
        </div>
        <div class="countdown__box">
          <span>0</span>
          <span>0</span>
        </div>
        <span>:</span>
        <div class="countdown__box">
          <span>0</span>
          <span>6</span>
        </div>
        <span>:</span>
        <div class="countdown__box">
          <span>3</span>
          <span>2</span>
        </div>
        <span>:</span>
        <div class="countdown__box">
          <span>4</span>
          <span>9</span>
        </div>
      </div>
    </div>
    <ul class="section__block">
      <li
        v-for="pro in isTimeLimitedProduct"
        :key="pro.title"
        class="product"
      >
        <div class="product__content">
          <h3>{{ pro.title }}</h3><span>{{ pro.capacity }}ml</span>
          <h6>{{ pro.ingredient }}</h6>
          <base-point mode="outline">{{ pro.point }}</base-point>
          <div class="product__price">
            NT$
            <base-price mode="discount">{{ pro.finalPrice }}</base-price>
            <base-price mode="line-through">{{ pro.marketingPrice }}</base-price>
          </div>
        </div>
        <div class="product__image">
          <div class="icons">
            <base-like mode="secondary-bg"></base-like>
          </div>
          <div class="image">
            <div></div>
            <base-image>
              <img :src="pro.imageUrl" alt="">
            </base-image>
          </div>
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

    const isTimeLimitedProduct = computed(() => products.filter((pro) => pro.isTimeLimited === true));

    return {
      products,
      isTimeLimitedProduct
    };
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
}

a {
  position: absolute;
  top: 0;
}

h2 {
  padding-right: 12px;
}

h6 {
  color: var(--secondary-300);
}

.section__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section__block {
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  background-color: var(--gray-300);
  border-radius: 6px 0 6px 6px;
  box-shadow: var(--box-shadow-1);
}

.section__block > li {
  width: calc(33% - 13.333px);
  background-color: var(--gray-100);
  border-radius: var(--border-radius-md);
}

.section__title > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76%;
}

.section__title > div:last-child {
  width: 24%;
  background-color: var(--gray-300);
}

.countdown {
  display: flex;
  justify-content: space-around;
}

.countdown__box {
  width: 40px;
  height: 36px;
  background-color: #fff;
  border-radius: var(--border-radius-sm);
}

.product {
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
}

.product__price {
  margin-top: 12px;
  color: var(--red-500);
}

.image > div:first-child {
  width: 132px;
  height: 132px;
  background-color: var(--gray-300);
  border-radius: var(--border-radius-circle);
}

.image {
  position: relative;
}
</style>
