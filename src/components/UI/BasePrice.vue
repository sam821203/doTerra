<template>
  <span class="price" :class="[mode, 'price-lg', { discount: isDiscount }]">
    <span class="price__inner">
      <slot />
    </span>
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
  font-size: 14px;
  letter-spacing: 0.6px;
}

.price__inner {
  margin-right: 8px;
}

.origin {
  font-size: 20px;
  color: var(--secondary-400);
  font-weight: 700;
}

.price-lg {
  font-size: 20px;
  color: var(--secondary-400);
  font-weight: 700;
}

.discount {
  color: var(--red-500);
}

.line-through {
  font-size: 12px;
  color: var(--secondary-200);
  text-decoration-line: line-through;
  font-weight: 400;
}
</style>
