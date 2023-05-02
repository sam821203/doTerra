<template>
  <ul>
    <favorites-element
      v-for="product in products"
      :key="product.name"
      :product-name="product.name"
      :product-ingredient="product.ingredient"
    ></favorites-element>
  </ul>
</template>

<script>
export default {
  // props: {
  //   products: {
  //     type: [String, Array, Number],
  //     required: true,
  //   },
  // },
  inject: ["products"],
  data() {
    return {};
  },
};
</script>
