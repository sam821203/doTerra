<template>
  <section class="flash-sale">
    <div class="section__title">
      <div>
        <p>One-time use code for <span class="">$10 off</span> of a $25 purchase!</p>
        <h2>Countdown</h2>
      </div>
      <div class="countdown">
        <div class="countdown__block">
          <div>
            <img src="../../assets/images/lightning.svg" alt="">
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
          <div class="countdown__box millisecond">
            <span>4</span>
            <span>9</span>
          </div>
        </div>
      </div>
    </div>
    <ul class="section__block">
      <li
        v-for="pro in isTimeLimitedProduct"
        :key="pro.title"
        class="product"
      >
        <div>
          <div class="product__content">
            <div>
              <div class="product__title">
                <h3>{{ pro.title }}</h3><span>({{ pro.capacity[0] }}ml)</span>
              </div>
              <h6>{{ pro.ingredient }}</h6>
            </div>
            <div>
              <base-point mode="outline">{{ pro.point }}</base-point>
              <div class="product__price">
                NT$
                <base-price mode="discount">{{ pro.finalPrice }}</base-price>
                <base-price mode="line-through">{{ pro.marketingPrice }}</base-price>
              </div>
            </div>
          </div>
          <div class="product__icons">
            <base-icon
              :product-id="pro.id"
              :is-liked="pro.isLiked"
              mode="like secondary-bg"
            ></base-icon>
            <base-icon
              :product-id="pro.id"
              :in-cart="pro.inCart"
              mode="cart secondary-bg"
            ></base-icon>
          </div>
          <div class="product__img">
            <div></div>
            <base-image :image-url="pro.imageUrl"></base-image>
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
  top: -16%;
  right: -6%;
  width: max-content;
  max-width: 148px;
}

h2 {
  padding-right: 32px;
}

h6 {
  padding-top: 8px;
  margin-bottom: 24px;
  max-width: 164px;
  height: 40px;
  color: var(--secondary-300);
  border-top: 1px solid var(--gray-400);
  line-height: 150%;
}

.section__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
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
  width: calc(33% - 8px);
  max-width: 390px;
  background-color: var(--gray-100);
  border-radius: var(--border-radius-md);
}

.section__title > div {
  height: 100%;
}

.section__title > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 78%;
  background-color: var(--gray-100);
}

.section__title p span {
  color: var(--red-500);
}

.countdown {
  position: relative;
  z-index: 2;
  padding: 4px;
  width: 22%;
  background-color: var(--gray-300);
  border-radius: 6px 6px 0 0
}

.countdown::before {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: var(--gray-300);
  border-right-width: 0;
  border-radius: 6px 6px 0 0;
  filter: drop-shadow(2px -9px 6px rgba(0, 0, 0, 0.03));
  content: '';
  transform: perspective(14px) rotateX(1deg);
  transform-origin: top right;
}

.countdown__block {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4.4%;
  transform: translateX(-8px);
  font-size: 18px;
  font-weight: 700;
  color: var(--secondary-100);
}

.countdown__box {
  width: 40px;
  height: 36px;
  text-align: center;
  color: var(--secondary-400);
  background-color: #fff;
  border-radius: var(--border-radius-sm);
  line-height: 36px;
}

.millisecond {
  color: var(--red-500);
  background-color: var(--red-200);
}

.product {
  position: relative;
}

.product > div {
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 24px 32px;

}

.product__price {
  margin-top: 12px;
  color: var(--red-500);
}

.price.discount {
  margin-right: 8px;
}

.product__img {
  position: relative;
  transform: translate(-24px, 8px);
}

.product__img > div:first-child {
  width: 132px;
  height: 132px;
  background-color: var(--gray-300);
  border-radius: var(--border-radius-circle);
  transform: translateY(4px);
}

.product__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.product__title {
  display: flex;
  align-items: end;
  margin-bottom: 16px;
}

.product__title h3 {
  margin-right: 8px;
}

.product__title span {
  font-size: 12px;
  color: var(--secondary-200);
}

.product__icons {
  position: absolute;
  top: 8%;
  right: 22px;
  z-index: 1;
  display: flex;
}

</style>
