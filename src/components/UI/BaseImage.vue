<template>
  <a href="javascript:void(0)">
    <div :class="mode">
      <img :src="imageUrl" alt="">
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
    imageUrl: {
      type: String,
      required: true,
      default: '',
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
  overflow: hidden;
}

img {
  object-fit: contain;
}
</style>
