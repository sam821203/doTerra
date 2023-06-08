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
  padding: 2.6% 2.6% 2%;
  width: fit-content;
  height: 20px;
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
  font-weight: 700;
  margin-right: 2px;
}
</style>
