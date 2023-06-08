<template>
  <span class="price" :class="mode">
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
    }
  }
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

.discount {
  font-size: 20px;
  color: var(--red-500);
  font-weight: 700;
}

.origin {
  font-size: 20px;
  color: var(--secondary-400);
  font-weight: 700;
}

.line-through {
  font-size: 12px;
  color: var(--secondary-200);
  text-decoration-line: line-through;
}

/* .product__price--discount {

      span {
        font-size: 20px;
        letter-spacing: 0.6px;

        &:last-child {
          font-size: 12px;
          color: var(--secondary-200);
          text-decoration-line: line-through;
        }
      }
    } */
</style>
