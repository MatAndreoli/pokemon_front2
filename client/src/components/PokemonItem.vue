<template>
  <div @click="$emit('pokemonEvent')" class="cards">
    <div class="card">
      <img :src="this.img" />
      <h2>{{ camelCase(this.name) }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonItem",
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    camelCase(str) {
      return str
        .split(" ")
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join("");
    },
  },
  emits: ["pokemonEvent"],
};
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  color: #000;
  width: 100%;
  cursor: pointer;

  .card {
    text-align: center;
    background-color: #ddd;
    border-radius: 5px;

    padding: 4px;

    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>