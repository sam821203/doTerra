<template>
  <section class="promo">
    <base-card class="section__left" mode="shadow">
      <div class="decoration"></div>
      <div class="info">
        <div>
          <h2 class="m-bottom--sm">Scents of the Season</h2>
          <p class="m-bottom--md">For life's fast-paced moments, from a busy work day to festive activities, try using Wild Orange during periods of low energy for a quick boost.</p>
          <base-button mode="btn-round">Add to Cart</base-button>
        </div>
      </div>
      <div class="product">
        <div class="product__info">
          <div>
            <div class="product__capacity">10ml</div>
            <h3 class="product__title">lemongrass</h3>
            <p class="product__desc">ingredient・pepper・ipsum</p>
          </div>
          <div>
            <base-point mode="outline">11,00</base-point>
            <div class="product__price">
              NT$
              <base-price mode="discount">1,980</base-price>
              <base-price mode="line-through">2,200</base-price>
            </div>
          </div>
        </div>
        <div class="product__imgs">
          <img src="../../assets/images/promo-decor.png" alt="">
          <img src="../../assets/images/promo-product.png" alt="">
        </div>
      </div>
    </base-card>
    <base-card class="section__right" mode="flat-gray">
      <div>
        <div class="semicircle"></div>
        <!-- 這裡會跟著月份改動 -->
        <h3 class="month-num">12</h3>
        <div class="month">December</div>
      </div>
      <div>
        <ul>
          <li class="product">
            <div class="product__tag pom">POM</div>
            <base-image>
              <img src="https://i.ibb.co/ZJsHP74/pro17.png" alt="">
            </base-image>
            <h3>Guard Toothpaste</h3>
          </li>
          <li class="product">
            <div class="product__tag discount">10<span>%</span></div>
            <base-image>
              <img src="https://i.ibb.co/mv24DXz/pro9.png" alt="">
            </base-image>
            <h3>Deepblue</h3>
          </li>
        </ul>
      </div>
    </base-card>
  </section>
</template>

<script>
// import { useStore } from 'vuex';

export default {
  setup() {
    // const store = useStore();

    // console.log(store);
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

ul {
  display: flex;
  justify-content: space-between;
}

li {
  width: calc(50% - 9px);
  height: 146px;
  background-color: var(--gray-100);
  border-radius: var(--border-radius-md);
}

.section__left {
  display: flex;
  width: calc(64% - 10px);
}

.decoration {
  width: 4%;
  background-color: var(--primary-100);
  border-radius: 6px 0 0 6px;
}

.section__left .info {
  padding: 22px;
  width: 52%;
}

.section__left .info > div {
  border-right: 1px solid var(--gray-300);
}

.section__left .product {
  position: relative;
  display: flex;
  width: 44%;
}

.section__left .product__imgs {
  width: 50%;
}

.section__left .product__imgs img {
  position: absolute;
}

.section__left .product__imgs img:first-child {
  top: 16%;
  right: 4%;
  opacity: 0.4;
}

.section__left .product__imgs img:last-child {
  top: -6%;
    right: 22%;
}

.section__left .product__info {
  display: flex;
  justify-content: space-between;
  padding: 0 12px 0 4px;
  width: 50%;
  height: 88%;
  flex-direction: column;
}

.section__left .product__desc {
  line-height: 140%;
  font-size: 12px;
  color: var(--secondary-100);
}

.section__left .product__capacity {
  margin-bottom: 12px;
  width: 46px;
  height: 22px;
  font-size: 12px;
  text-align: center;
  color: var(--primary-300);
  background-color: var(--primary-100);
  border-radius: 0 0 2px 2px;
  line-height: 23px;
}

.product__title {
  margin-bottom: 8px;
}

.product__price {
  margin-top: 12px;
  font-size: 14px;
  color: var(--red-500);
}

.section__right {
  position: relative;
  width: calc(36% - 10px);
  max-height: 228px;
  text-align: center;
  overflow: hidden;
}

.section__right h3 {
  margin-bottom: 12px;
}

.section__right > div:last-child {
  padding: 32px 18px 16px;
  transform: translateY(-46px);
}

.section__right .month-num,
.section__right .month {
  position: absolute;
  left: 49.8%;
  transform: translateX(-50%);
  color: var(--gray-400);
}

.section__right .product {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.section__right .product__tag {
  position: absolute;
  top: 20px;
  left: 0;
  padding-right: 4px;
  width: 46px;
  height: 34px;
  font-size: 14px;
  text-align: center;
  border-radius: 0 50px 50px 0;
  box-shadow: var(--box-shadow-1);
  font-weight: 700;
  line-height: 34px;
}

.product__tag.pom {
  color: var(--green-400);
  background-color: var(--green-100);
}

.product__tag.discount {
  color: var(--red-500);
  background-color: var(--red-100);
}

.product__tag.discount span {
  margin-left: 1px;
  font-size: 12px;
  font-weight: 400;
}

.section__right .month-num {
  top: 0.5%;
  font-size: 26px;
}

.section__right .month {
  top: 18%;
  font-weight: 500;
}

.semicircle {
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 80px;
  background-color: var(--gray-200);
  border-radius: var(--border-radius-circle);
  transform: translateY(-58%);
}

.section__right .product a {
  position: absolute;
  top: -36%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
}
</style>
