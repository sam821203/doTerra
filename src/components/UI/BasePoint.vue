<template>
  <div class="point" :class="mode">
    <span>
      <slot />
    </span>
    PV
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
.point {
  padding: 2% 4.6% 1.4%;
  width: fit-content;
  height: 20px;
  font-size: 12px;
  color: var(--primary-300);
  background-color: var(--gray-100);
  border: 1px solid var(--primary-100);
  border-radius: var(--border-radius-sm);
  line-height: 20px;
}

.outline {
  border: 1px solid var(--primary-100);
}

span {
  margin-right: 2px;
  font-weight: 700;
}
</style>
