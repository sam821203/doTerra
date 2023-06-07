<template>
  <button :class="mode">
    <slot />
  </button>
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
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.btn-cta {
  width: 136px;
  height: 40px;
  text-align: center;
  color: var(--gray-100);
  background-color: var(--primary-300);
  border-radius: var(--border-radius-rounded-btn);
  font-weight: 700;
  box-shadow: var(--box-shadow-1);
}

.btn-search {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
</style>
