<template>
  <span class="price" :class="[mode, { discount: isDiscount }]">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    isDiscount: {
      type: Boolean,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
.price {
  font-size: 20px;
  color: var(--secondary-400);
  letter-spacing: 0.6px;
  font-weight: 600;
}

.origin {
  font-size: 20px;
  color: var(--secondary-400);
  font-weight: 700;
}

.discount {
  color: var(--red-500);
}

.line-through {
  margin-bottom: 4px;
  font-size: 12px;
  color: var(--secondary-200);
  text-decoration-line: line-through;
  font-weight: 400;
}
</style>
