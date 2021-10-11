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
      <span class="transition-colors hover:text-white">Daily</span>
      <span class="transition-colors text-white">Weekly</span>
      <span class="transition-colors hover:text-white">Monthly</span>
    </div>
  </div>
</template>
