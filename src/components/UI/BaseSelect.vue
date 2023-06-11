<template>
  <select :class="mode">
    <option value="" disabled selected>Capacity</option>
    <option v-for="(option, index) in pro.capacity" :key="index">{{ option }}</option>
  </select>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const products = store.getters.getProducts;

    const handleCapacity = computed(() => products.map((pro) => (Array.isArray(pro.capacity) ? pro.capacity.join(', ') : pro.capacity)));

    return {
      handleCapacity: handleCapacity.value
    };
  }
};
</script>
