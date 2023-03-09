<template>
  <label for="numResults">Number of results:</label>
  <input
    type="number"
    id="numResults"
    v-model="numResults"
    @input="fetchPalettes"
    class="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md  py-2 w-12 ml-8 pl-1"/>

  <div class="flex flex-wrap space-x-12 space-y-4 mt-12 justify-center">
    <PatternComponent
      v-for="(pattern, index) in patterns"
      :key="index"
      :pattern="pattern"
    ></PatternComponent>
  </div>
</template>

<script>
import axios from "axios";
import PatternComponent from "./PatternComponent.vue";

export default {
  components: {
    PatternComponent,
  },
  data() {
    return {
      patterns: [],
      numResults: 10,
    };
  },
  async mounted() {
    this.fetchPalettes();
  },

  methods: {
    async fetchPalettes() {
      try {
        const response = await axios.get(
          `http://www.colourlovers.com/api/patterns/top?numResults=${this.numResults}&format=json`
        );
        this.patterns = response.data;
        console.log(this.patterns[0].imageUrl);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
