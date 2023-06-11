<template>
  <div class="card" :class="mode">
    <slot />
  </div>
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
.flat-gray {
  background-color: var(--gray-300);
  border-radius: var(--border-radius-md);
}

.shadow {
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-1);
}

.shadow-rounded {
  border-radius: 72px 72px 6px 6px;
  box-shadow: var(--box-shadow-1);
}

/* .outline {
  border-radius: var(--border-radius-md);
  border: 1px slo;
} */
</style>
