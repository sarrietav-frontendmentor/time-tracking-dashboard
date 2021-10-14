<template>
  <main
    class="
      font-rubik
      bg-darker-blue
      h-full
      px-5
      py-24
      lg:grid
      grid-cols-4
      place-content-between
      gap-x-10
      lg:px-40 lg:h-screen
    "
  >
    <TheUserComponent class="row-span-2" />
    <div v-for="task in tasks" :key="task.title" class="my-12 last:m-0 lg:m-0">
      <Task :title="task.title" :timeframes="task.timeframes" />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Task } from '~/app.t'
import { RootState } from '~/store'

export default Vue.extend({
  data(): { tasks: Task[] } {
    return {
      tasks: (this.$store.state as RootState).tasks,
    }
  },
})
</script>
