<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <FavoritesBase />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FavoritesBase from "./components/FavoritesBase.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    FavoritesBase,
  },
  data() {
    return {
      products: [
        {
          name: "Smartsassy",
          ingredient: "ingredient・pepper・ipsum",
          originalPrice: 1800,
          discount: 1500,
          capacity: 450,
        },
        {
          name: "verage personalcare",
          ingredient: "ingredient・pepper・ipsum",
          originalPrice: 1860,
          discount: null,
          capacity: 50,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
