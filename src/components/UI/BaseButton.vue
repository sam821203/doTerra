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
  text-align: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
}

.btn-round {
  width: 136px;
  height: 40px;
  color: var(--gray-100);
  background-color: var(--primary-300);
  border-radius: var(--border-radius-rounded-btn);
  box-shadow: var(--box-shadow-1);
}

.btn-search {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.btn-square {
  width: 100%;
  height: 40px;
  color: var(--gray-100);
  background-color: var(--primary-300);
  border: 1px solid var(--primary-300);
  font-weight: 500;
}
</style>
