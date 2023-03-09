<template>
  <div class="w-48 justify-center border-2 py-4">
    <div class="flex justify-center">
      <div
        v-for="(color, index) in colors"
        :key="index"
        :style="{ backgroundColor: color }"
        class="w-8 h-48"
      ></div>
    </div>
    <p class="font-normal text-slate-700 mt-6">{{ palette.title }}</p>
    <p class="font-light text-slate-400">{{ palette.userName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    palette: Object,
    colors: Array
  },
};
</script>
