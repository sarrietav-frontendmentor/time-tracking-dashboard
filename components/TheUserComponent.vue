<template>
  <div class="bg-dark-blue h-48 rounded-2xl flex flex-col">
    <div
      class="
        bg-blue-700
        flex
        justify-center
        items-center
        rounded-2xl
        px-2
        py-7
        space-x-4
      "
    >
      <img
        src="~/assets/image-jeremy.png"
        alt="Image of Jeremy"
        class="h-20 rounded-full border-white border-4"
      />
      <div class="flex flex-col text-gray-100">
        <span class="text-xs text-pale-blue">Report for</span>
        <span class="text-2xl">Jeremy Robson</span>
      </div>
    </div>
    <div
      class="
        text-desaturated-blue
        h-full
        text-lg
        flex
        justify-evenly
        items-center
      "
    >
      <span
        class="transition-colors hover:text-white"
        :class="getCurrentTimeframe == 'daily' && 'text-white'"
        @click="onClickDaily"
        >Daily</span
      >
      <span
        class="transition-colors hover:text-white"
        :class="getCurrentTimeframe == 'weekly' && 'text-white'"
        @click="onClickWeekly"
        >Weekly</span
      >
      <span
        class="transition-colors hover:text-white"
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
