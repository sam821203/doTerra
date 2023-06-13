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
            <div class="product__tag">
              <img
                v-if="pro.isDiscount"
                src="../../assets/images/promo-tag.png"
                alt=""
              >
            </div>
            <base-image :image-url="pro.imageUrl"></base-image>
            <h3>{{ pro.title }}</h3>
            <h6>{{ pro.ingredient }}</h6>
            <div class="product__price">
              <div class="product__select">
                <select v-model="pro.selectCapacity">
                  <option
                    value=""
                    disabled
                    selected
                  >
                    CY (ml)
                  </option>
                  <option v-for="(option, index) in pro.capacity" :key="index">{{ option }} ml</option>
                </select>
                <span class="product__select--focus"></span>
              </div>
              <div>
                <base-price v-if="pro.isDiscount" mode="line-through">{{ pro.marketingPrice }}</base-price>
                <base-price :is-discount="pro.isDiscount"><span class="currency">NT$</span>{{ pro.finalPrice }}</base-price>
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
  padding-bottom: 352px;
  margin-bottom: 104px;
}

h3 {
  margin-bottom: 8px;
}

h6 {
  margin-bottom: 24px;
  text-align: center;
}

ul {
  display: flex;
  justify-content: space-evenly;
  padding: 36px 0 26px;
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

select {
  padding: 8px 16px 8px 6px;
  margin: 0;
  height: 30px;
  color: var(--secondary-300);
  background-color: transparent;
  border: none;
  outline: none;
  appearance: none;
}

.product__select {
  position: relative;
  display: grid;
  align-items: center;
  min-width: 72px;
  max-height: 30px;
  font-size: 12px;
  background-color: var(--gray-200);
  border: 1px solid var(--gray-400);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  grid-template-areas: "select";
}

.product__select::after {
  margin-top: 2px;
  margin-right: 5px;
  width: 8px;
  height: 6px;
  background-color: var(--secondary-300);
  content: "";
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  justify-self: end;
}

select,
.product__select::after {
  grid-area: select;
}

select:focus + .product__select--focus {
  position: absolute;
  inset: -1px;
  border: 1.5px solid var(--primary-200);
  border-radius: inherit;
}

.product__select + div {
  display: flex;
  flex-direction: column;
  text-align: right;
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
  align-items: end;
  margin-bottom: 16px;
  height: 54px;
}

.product__tag {
  margin-bottom: 8px;
  height: 32px;
}

.product__tag + a {
  display: block;
  margin-bottom: 16px;
}
</style>
