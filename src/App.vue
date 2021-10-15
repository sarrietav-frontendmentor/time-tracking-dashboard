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
      place-content-center
      gap-x-10
      gap-y-10
      lg:px-40 lg:h-screen
    "
  >
    <TheUserComponent class="row-start-1 row-span-2" />
    <div v-for="task in tasks" :key="task.title" class="my-12 last:m-0 lg:m-0 relative">
      <Task :title="task.title" :timeframes="task.timeframes" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from './store';
import TheUserComponent from './components/TheUserComponent.vue';
import Task from './components/Task.vue';

const store = useStore();

const tasks = computed(() => store.state.tasks);
</script>

<style></style>
