<template>
  <section class="favorites">
    <h2>My Favorites</h2>
    <ul v-for="product in products" :key="product.name">
      <li>
        <a href="">
          <div class="img-wrap">
            <img :src="product.imgUrl" alt="">
          </div>
          <div>{{ product.name }}</div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  setup() {
    const products = [
      {
        name: "Smartsassy",
        ingredient: "ingredient・pepper・ipsum",
        originalPrice: 1800,
        discount: 1500,
        capacity: 450,
        imgUrl: "https://media.etmall.com.tw/NXimg/003600/3600992/3600992-1_L.jpg"
      },
      {
        name: "verage personalcare",
        ingredient: "ingredient・pepper・ipsum",
        originalPrice: 1860,
        discount: null,
        capacity: 50,
        imgUrl: "https://media.etmall.com.tw/NXimg/003453/3453750/3453750-1_L.jpg"
      },
      {
        name: "Smartsassy",
        ingredient: "ingredient・pepper・ipsum",
        originalPrice: 1800,
        discount: 1500,
        capacity: 450,
        imgUrl: "https://media.etmall.com.tw/NXimg/002265/2265260/2265260-1_L.jpg"
      },
      {
        name: "verage personalcare",
        ingredient: "ingredient・pepper・ipsum",
        originalPrice: 1860,
        discount: null,
        capacity: 50,
        imgUrl: "https://media.etmall.com.tw/NXimg/004716/4716422/4716422-1_XXL.jpg"
      },
    ];

    return {
      products
    };
  },
};
</script>

<style></style>
