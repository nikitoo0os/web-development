<template>
  <div ref="paletteContainer" class="palette-container">
    <label for="numResults">Number of results:</label>
    <input type="number" id="numResults" v-model="numResults" class="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 w-12 ml-8 pl-1"/>

<div class="flex flex-wrap space-x-12 space-y-4 mt-12 justify-center">
  <PaletteComponent
    v-for="(palette, index) in palettes"
    :key="index"
    :palette="palette"
    :colors="colors[index]"
  ></PaletteComponent>
</div>
  </div>
</template>

<script>
import axios from "axios";
import PaletteComponent from "./PaletteComponent.vue";

export default {
  components: {
    PaletteComponent,
  },
  data() {
    return {
      palettes: [],
      colors: [[]],
      numResults: 10,
      loading: false,
    };
  },
  async mounted() {
    this.fetchPalettes();
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    async fetchPalettes() {
      if (this.loading) {
        return;
      }
      this.loading = true;

      try {
        const response = await axios.get(
          `http://www.colourlovers.com/api/palettes/top?numResults=${this.numResults}&format=json`
        );
        const newPalettes = response.data.slice(this.palettes.length);
        if (newPalettes.length === 0) {
          // no more palettes to fetch, remove scroll event listener
          window.removeEventListener("scroll", this.handleScroll);
        }
        this.palettes = this.palettes.concat(newPalettes);

        for (
          let i = this.palettes.length - newPalettes.length;
          i < this.palettes.length;
          i++
        ) {
          for (let j = 0; j < this.palettes[i].colors.length; j++) {
            this.colors[i] = this.colors[i] || [];
            this.colors[i].push("#" + this.palettes[i].colors[j]);
            console.log("added: " + "#" + this.palettes[i].colors[j]);
          }
        }
      } catch (error) {
        console.log(error);
      }

      this.loading = false;
    },

    handleScroll() {
      const container = this.$refs.paletteContainer;
      const containerRect = container.getBoundingClientRect();
      const bottomOffset = containerRect.bottom - window.innerHeight;

      if (bottomOffset <= 50) {
        this.numResults += 10;
        this.fetchPalettes();
      }
    },
  },
};
</script>
