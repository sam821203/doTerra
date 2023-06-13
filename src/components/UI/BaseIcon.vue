<template>
  <button
    v-if="checkClass === 'like'"
    ref="button"
    :class="[mode, { active: isLiked }]"
    @click="toggleLike"
  >
    <div v-html="handleIconSrc"></div>
  </button>
  <button
    v-if="checkClass === 'cart'"
    ref="button"
    :class="[mode, { active: inCart }]"
    @click="toggleCart"
  >
    <div v-html="handleIconSrc"></div>
  </button>
</template>

<script>
import { computed, ref, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    productId: {
      type: Number,
      required: true,
      default: null,
    },
    isLiked: {
      type: Boolean,
      required: false,
      default: null,
    },
    inCart: {
      type: Boolean,
      required: false,
      default: null,
    }
  },
  setup(props) {
    const store = useStore();
    const button = ref(null);
    const instance = getCurrentInstance();

    const checkClass = computed(() => {
      if (instance.props.mode.includes('like')) {
        return 'like';
      } if (instance.props.mode.includes('cart')) {
        return 'cart';
      }
      return '';
    });

    const toggleLike = () => {
      store.commit('toggleLike', props.productId);
    };

    const toggleCart = () => {
      store.commit('toggleCart', props.productId);
    };

    const handleIconSrc = computed(() => {
      if (button.value && button.value.classList.contains('like')) {
        return `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.8401 11.6101C27.3294 11.0991 26.7229 10.6938 26.0555 10.4172C25.388 10.1406 24.6726 9.99829 23.9501 9.99829C23.2276 9.99829 22.5122 10.1406 21.8448 10.4172C21.1773 10.6938 20.5709 11.0991 20.0601 11.6101L19.0001 12.6701L17.9401 11.6101C16.9084 10.5784 15.5092 9.99883 14.0501 9.99883C12.5911 9.99883 11.1918 10.5784 10.1601 11.6101C9.12843 12.6418 8.54883 14.0411 8.54883 15.5001C8.54883 16.9591 9.12843 18.3584 10.1601 19.3901L11.2201 20.4501L19.0001 28.2301L26.7801 20.4501L27.8401 19.3901C28.3511 18.8794 28.7565 18.2729 29.033 17.6055C29.3096 16.938 29.4519 16.2226 29.4519 15.5001C29.4519 14.7776 29.3096 14.0622 29.033 13.3948C28.7565 12.7273 28.3511 12.1209 27.8401 11.6101V11.6101Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
      }

      if (button.value && button.value.classList.contains('cart')) {
        return `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_747_94)">
        <path d="M16.2497 28.1666C16.7559 28.1666 17.1663 27.7562 17.1663 27.2499C17.1663 26.7437 16.7559 26.3333 16.2497 26.3333C15.7434 26.3333 15.333 26.7437 15.333 27.2499C15.333 27.7562 15.7434 28.1666 16.2497 28.1666Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.3337 28.1666C26.8399 28.1666 27.2503 27.7562 27.2503 27.2499C27.2503 26.7437 26.8399 26.3333 26.3337 26.3333C25.8274 26.3333 25.417 26.7437 25.417 27.2499C25.417 27.7562 25.8274 28.1666 26.3337 28.1666Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.91699 8.91675H12.5837L15.0403 21.1909C15.1242 21.6129 15.3537 21.992 15.6889 22.2619C16.0241 22.5317 16.4435 22.675 16.8737 22.6667H25.7837C26.2139 22.675 26.6332 22.5317 26.9684 22.2619C27.3036 21.992 27.5332 21.6129 27.617 21.1909L29.0837 13.5001H13.5003" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_747_94">
        <rect width="22" height="22" fill="white" transform="translate(8 8)"/>
        </clipPath>
        </defs>
        </svg>`;
      }

      return 'no';
    });

    return {
      button,
      handleIconSrc,
      toggleLike,
      toggleCart,
      checkClass,
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
  width: 32px;
  height: 32px;
  text-align: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  fill: transparent;
}

.primary-bg {
  stroke: var(--primary-200);
}

.primary-outline {
  width: 40px !important;
  height: 40px !important;
  border: 1px solid var(--primary-400);
  border-radius: 0 2px 2px 0;
  stroke: var(--primary-400);
}

.primary-outline:hover {
  background-color: var(--primary-100);
}

.like > div,
.cart > div {
  transform: translateX(-3px);
}

.like.primary-bg.active {
  fill: var(--primary-200);
}

.like.secondary-bg.active,
.cart.secondary-bg.active {
  fill: var(--secondary-100);
}

.like.primary-outline.active {
  fill: var(--primary-400);
}

.secondary-outline {
  border: 1px solid var(--secondary-100);
  border-radius: 0 2px 2px 0;
  stroke: var(--secondary-100);
}

.secondary-bg {
  stroke: var(--secondary-100);
}
</style>
