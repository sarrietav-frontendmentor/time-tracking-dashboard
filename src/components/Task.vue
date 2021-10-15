<template>
  <div class="rounded-2xl relative flex justify-end h-40" :class="bgClass">
    <div class="overflow-hidden mr-5">
      <img
        :src="
          require(`@/assets/icon-${title.toLowerCase().replace(' ', '-')}.svg`)
        "
        alt="Task icon"
        class="relative -top-2"
      />
    </div>
    <div
      class="
        transition-all
        bg-dark-blue
        px-5
        py-7
        space-y-3
        rounded-2xl
        absolute
        top-12
        w-full
        lg:h-full
        filter
        hover:brightness-110
      "
    >
      <div class="flex justify-between items-center">
        <span class="font-medium text-white text-xl lg:text-base">{{
          title
        }}</span>
        <svg
          width="21"
          height="5"
          xmlns="http://www.w3.org/2000/svg"
          class="
            fill-current
            text-desaturated-blue
            hover:text-pale-blue
            transition-colors
          "
        >
          <path
            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div class="flex justify-between items-center lg:flex-col lg:items-start">
        <span class="font-light text-white text-4xl">{{ currentTime }}hrs</span>
        <span class="text-pale-blue">Last Week - {{ lastTime }}hrs</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Timeframes } from '@/app.t';
import { useStore } from '@/store';
import { defineComponent, PropType, computed } from 'vue';
export default defineComponent({
  props: {
    title: { required: true, type: String },
    timeframes: { required: true, type: Object as PropType<Timeframes> },
  },
  setup(props) {
    const store = useStore();

    const bgClass = computed(() => {
      switch (props.title.toLowerCase().replace(' ', '-')) {
        case 'work':
          return 'bg-work';
        case 'play':
          return 'bg-play';
        case 'exercise':
          return 'bg-exercise';
        case 'social':
          return 'bg-social';
        case 'study':
          return 'bg-study';
        case 'self-care':
          return 'bg-self-care';
        default:
          return 'what';
      }
    });

    return {
      bgClass,
      currentTime: computed(
        () => props.timeframes[store.state.currentTimeframe].current,
      ),
      lastTime: computed(
        () => props.timeframes[store.state.currentTimeframe].previous,
      ),
    };
  },
});
</script>
