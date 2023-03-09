<template>
  <div>
    <span class="font-semibold text-2xl">Welcome to COLOURSlovers API!</span>

    <p class="mt-8 font-semibold text-xl">Palletes:</p>
    <div class="px-12 py-4">
      <PalettesView></PalettesView>
    </div>

    <!-- <p class="mt-8 font-semibold text-xl">Patterns:</p>
    <div class="px-12 py-4">
      <PatternsView></PatternsView>
    </div> -->
  </div>
</template>

<script>

import PalettesView from './components/PalettesView.vue';


export default {
  name: 'App',
  components: {
    PalettesView,

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
