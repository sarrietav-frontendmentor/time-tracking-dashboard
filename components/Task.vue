<template>
  <div
    class="rounded-2xl relative flex justify-end h-40"
    :class="`bg-${title.toLowerCase().replace(' ', '-')}`"
  >
    <div class="overflow-hidden mr-5">
      <img
        :src="
          require(`~/assets/icon-${title.toLowerCase().replace(' ', '-')}.svg`)
        "
        alt="Task icon"
        class="relative -top-2"
      />
    </div>
    <div
      class="
        bg-dark-blue
        px-5
        py-7
        rounded-2xl
        absolute
        w-full
        top-12
        space-y-1
      "
    >
      <div class="flex justify-between items-center">
        <span class="font-medium text-white text-xl">{{ title }}</span>
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
      <div class="flex justify-between items-center">
        <span class="font-light text-white text-4xl"
          >{{ getCurrentTime }}hrs</span
        >
        <span class="text-pale-blue">Last Week - {{ getLastTime }}hrs</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
// eslint-disable-next-line import/named
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: { required: true, type: String },
    timeframes: { required: true, type: Object},
  },
  computed: {
    getCurrentTime() {
      return this.timeframes[this.$store.state.currentTimeframe].current
    },
    getLastTime() {
      return this.timeframes[this.$store.state.currentTimeframe].previous
    }
  },
})
</script>
