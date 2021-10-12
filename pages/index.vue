<template>
  <main class="font-rubik bg-darker-blue h-full px-5 py-24">
    <TheUserComponent />
    <ul class="list-none last:m-0">
      <li v-for="task in tasks" :key="task.title" class="my-12 last:m-0">
        <Task :title="task.title" :timeframes="task.timeframes" />
      </li>
    </ul>
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
