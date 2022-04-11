<template>
  <div class="pokemon-main">
    <Pokemon-List/>
  </div>
</template>

<script>
import PokemonList from './PokemonList.vue';
export default {
  components: { PokemonList },
  name: "PokemonMain"
};
</script>

<style lang="scss" scoped>
.pokemon-main {
  width: 100%;
  display: grid;
  grid-template-columns: 30%;
  justify-content: center;
}
</style>