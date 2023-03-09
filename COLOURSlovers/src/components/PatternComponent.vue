<template>
  <div class="w-56 h-auto justify-center border-2 py-4 px-1">
    <div class="flex justify-center">
      <img :src="pattern.imageUrl" alt="" class="h-48" />
    </div>
    <p class="font-normal text-slate-700 mt-6">{{ pattern.title }}</p>
    <p class="font-light text-slate-400">{{ pattern.userName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    pattern: Object,
  },
};
</script>
