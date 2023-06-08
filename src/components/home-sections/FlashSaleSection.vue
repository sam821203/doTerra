<template>
  <section class="flash-sale">
    <div>
      <base-like mode="secondary-bg"></base-like>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    console.log();
  }
};
</script>
