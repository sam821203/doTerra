<template>
  <a href="">
    <div class="img-wrap" :class="mode">
      <slot />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
