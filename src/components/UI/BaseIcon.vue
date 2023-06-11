<template>
  <button ref="button" :class="[mode, { active: iconState }]" @click="handleIconState">
    <div v-html="handleIconSrc"></div>
  </button>
</template>

<script>
import { computed, ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    svgPaths: {
      type: Array,
      required: false,
      default: null,
    }
  },
  setup(props) {
    const store = useStore();
    const button = ref(null);
    const iconState = ref(null);

    const likeSvgPath = props.svgPaths[0].path;
    const cartSvgPath = props.svgPaths[1].path;

    onMounted(() => {
      // 初始赋值
      if (button.value && button.value.classList.contains('like')) {
        iconState.value = computed(() => store.getters.isLiked);
      }

      if (props.mode === 'cart') {
        iconState.value = computed(() => store.getters.inCart);
      }
    });

    watch(button, (newValue) => {
      if (newValue) {
        if (newValue.classList.contains('like')) {
          iconState.value = computed(() => store.getters.isLiked);
        }

        if (props.mode === 'cart') {
          iconState.value = computed(() => store.getters.inCart);
        }
      }
    });

    const handleIconState = () => {
      if (button.value && button.value.classList.contains('like')) {
        store.dispatch('handleLiked');
      }

      if (button.value && button.value.classList.contains('cart')) {
        store.dispatch('handleLiked');
      }
    };

    const handleIconSrc = computed(() => {
      if (button.value && button.value.classList.contains('like')) {
        return likeSvgPath;
      }

      if (button.value && button.value.classList.contains('cart')) {
        return cartSvgPath;
      }

      return 'no';
    });

    return {
      button,
      iconState,
      handleIconState,
      handleIconSrc,
    };
  },
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.primary-bg {
  stroke: var(--primary-200);
}

.primary-outline {
  border: 1px solid var(--primary-400);
  border-radius: 0 2px 2px 0;
  stroke: var(--primary-400);
}

.secondary-outline {
  border: 1px solid var(--secondary-100);
  border-radius: 0 2px 2px 0;
  stroke: var(--secondary-100);
}

.secondary-bg {
  stroke: var(--secondary-100);
}

.like.primary-bg {
  fill: var(--primary-200);
}

.like.secondary-bg {
  fill: var(--secondary-100);
}
</style>
