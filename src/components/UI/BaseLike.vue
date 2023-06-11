<template>
  <button class="img-wrap" :class="[mode, { like: isLikedState }]" @click="handleLikedState">
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.8401 11.6101C27.3294 11.0991 26.7229 10.6938 26.0555 10.4172C25.388 10.1406 24.6726 9.99829 23.9501 9.99829C23.2276 9.99829 22.5122 10.1406 21.8448 10.4172C21.1773 10.6938 20.5709 11.0991 20.0601 11.6101L19.0001 12.6701L17.9401 11.6101C16.9084 10.5784 15.5092 9.99883 14.0501 9.99883C12.5911 9.99883 11.1918 10.5784 10.1601 11.6101C9.12843 12.6418 8.54883 14.0411 8.54883 15.5001C8.54883 16.9591 9.12843 18.3584 10.1601 19.3901L11.2201 20.4501L19.0001 28.2301L26.7801 20.4501L27.8401 19.3901C28.3511 18.8794 28.7565 18.2729 29.033 17.6055C29.3096 16.938 29.4519 16.2226 29.4519 15.5001C29.4519 14.7776 29.3096 14.0622 29.033 13.3948C28.7565 12.7273 28.3511 12.1209 27.8401 11.6101V11.6101Z"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    }
  },
  setup() {
    const store = useStore();
    // 這裡會從 store 那邊的 actions，dispatch 事件過來
    const isLikedState = computed(() => store.getters.isLiked);
    const handleLikedState = () => {
      store.dispatch('handleLiked');
    };

    return {
      isLikedState,
      handleLikedState
    };
  }
};
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.primary-bg svg {
  stroke: var(--primary-200);
}

.primary-outline {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  border: 1px solid var(--primary-400);
  border-radius: 0 2px 2px 0;
}

.primary-outline svg {
  stroke: var(--primary-400);
}

.secondary-bg svg {
  stroke: var(--secondary-100);
}

.like.primary-bg svg {
  fill: var(--primary-200);
}

.like.secondary-bg svg {
  fill: var(--secondary-100);
}
</style>
