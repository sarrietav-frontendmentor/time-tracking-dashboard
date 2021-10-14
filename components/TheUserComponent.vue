<template>
  <div class="bg-dark-blue h-48 lg:h-auto rounded-2xl flex flex-col">
    <div
      class="
        bg-blue-700
        rounded-2xl
        px-2
        lg:px-5
        py-7
        space-x-4
        lg:space-x-0
        flex
        justify-center
        items-center
        lg:flex-col lg:items-start lg:justify-evenly lg:h-full
      "
    >
      <img
        src="~/assets/image-jeremy.png"
        alt="Image of Jeremy"
        class="h-20 rounded-full border-white border-4"
      />
      <div class="flex flex-col text-gray-100">
        <span class="text-xs lg:text-lg text-pale-blue">Report for</span>
        <span class="text-2xl lg:text-4xl lg:font-light">Jeremy Robson</span>
      </div>
    </div>
    <div
      class="
        text-desaturated-blue text-lg
        h-full
        flex
        justify-evenly
        items-center
        lg:flex-col
        lg:items-start
        lg:justify-start
        lg:space-y-3
        lg:p-7
        lg:h-auto
      "
    >
      <span
        class="cursor-pointer transition-colors hover:text-white"
        :class="getCurrentTimeframe == 'daily' && 'text-white'"
        @click="onClickDaily"
        >Daily</span
      >
      <span
        class="cursor-pointer transition-colors hover:text-white"
        :class="getCurrentTimeframe == 'weekly' && 'text-white'"
        @click="onClickWeekly"
        >Weekly</span
      >
      <span
        class="cursor-pointer transition-colors hover:text-white"
        :class="getCurrentTimeframe == 'monthly' && 'text-white'"
        @click="onClickMonthly"
        >Monthly</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { RootState } from '~/store'
export default Vue.extend({
  computed: {
    getCurrentTimeframe() {
      return (this.$store.state as RootState).currentTimeframe
    },
  },
  methods: {
    onClickDaily() {
      this.$store.commit('changeTimeframe', 'daily')
    },
    onClickWeekly() {
      this.$store.commit('changeTimeframe', 'weekly')
    },
    onClickMonthly() {
      this.$store.commit('changeTimeframe', 'monthly')
    },
  },
})
</script>
