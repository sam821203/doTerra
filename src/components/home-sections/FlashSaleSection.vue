<template>
  <section class="flash-sale layout--main m-bottom--xl">
    <div class="flash-sale__top">
      <div class="flash-sale__text">
        <p>One-time use code for <span>$10 off</span> of a $25 purchase!</p>
        <h2>Countdown</h2>
      </div>
      <div class="flash-sale__countdown">
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
    <div class="flash-sale__bottom">
      <div v-for="product in isTimeLimitedProduct" :key="product.title" class="product">
        <div class="product__box">
          <div class="product__content">
            <div class="product__title">
              <h3>{{ product.title }}</h3><span>{{ product.capacity }}ml</span>
            </div>
            <div class="product__ingredient">{{ product.ingredient }}</div>
            <base-point mode="outline">{{ product.point }}</base-point>
            <div class="product__price--discount">
              NT$
              <base-price mode="discount">{{ product.finalPrice }}</base-price>
              <base-price mode="line-through">{{ product.marketingPrice }}</base-price>
            </div>
          </div>
          <div class="product__image">
            <div class="icons">
              <base-like mode="secondary-bg"></base-like>
            </div>
            <div class="image">
              <div></div>
              <div class="img-wrap">
                <img :src="product.imageUrl" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
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

    const isTimeLimitedProduct = computed(() => products.filter((pro) => pro.isTimeLimited === true));

    return {
      products,
      isTimeLimitedProduct
    };
  }
};
</script>

<style scoped>
.flash-sale {
  display: flex;
  flex-direction: column;
}

.flash-sale__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flash-sale__text h2 {
  padding-right: 12px;
}

.flash-sale__bottom {
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  background-color: var(--gray-300);
  border-radius: 6px 0 6px 6px;
  box-shadow: var(--box-shadow-1);
}

.flash-sale__bottom > div {
  width: calc(33% - 13.333px);
  background-color: var(--gray-100);
  border-radius: var(--border-radius-md);
}

.flash-sale__top > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76%;
}

.flash-sale__top > div:last-child {
  width: 24%;
  background-color: var(--gray-300);
}

.flash-sale__countdown {
  display: flex;
  justify-content: space-around;
}

.countdown__box {
  width: 40px;
  height: 36px;
  background-color: #fff;
  border-radius: var(--border-radius-sm);
}

.product__box {
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
}

.product__price--discount {
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

.image > div:last-child {
  position: absolute;
  top: 0;
}
</style>
