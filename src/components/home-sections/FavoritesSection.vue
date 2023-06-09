<template>
  <section class="favorites layout--main m-bottom--xl">
    <h2>My Favorites</h2>
    <base-card mode="shadow-rounded">
      <ul>
        <li v-for="product in isFavoritesProduct" :key="product.title">
          <a href="">
            <div class="img-wrap">
              <img :src="product.imageUrl" alt="">
            </div>
          </a>
          <h3>{{ product.title }}</h3>
          <p>{{ product.ingredient }}</p>
          <select v-model="product.selectCapacity">
            <option v-for="option in product.capacity" :key="index">{{ proCapacity }}</option>
          </select>
        </li>
      </ul>
    </base-card>
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

    // const handleCapacity = computed(() => products.map((pro) => {
    //   console.log(pro.capacity);
    //   return pro.capacity;
    // }));

    // products.forEach((product) => {
    //   console.log(product);
    // });
    // console.log(products);
    return {
      products,
      isFavoritesProduct: isFavoritesProduct.value,
      handleCapacity: handleCapacity.value
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
}

li {
  background-color: var(--gray-100);
}
</style>
