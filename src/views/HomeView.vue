<template>
  <div class="home">
    <div class="content">
      <img
        src="/img/png-clipart-pokemon-logo-pokemon-logo-thumbnail.png"
      />
      <h1>Pokedex VueJS</h1>
      <h2><p>Choose the pokemon to see its details:</p></h2>
      <Pokemon-Main />
    </div>
  </div>
</template>

<script>
import PokemonMain from "@/components/PokemonMain.vue";
export default {
  components: { PokemonMain },
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
.home {
  .content {
    display: grid;
    grid-template-rows: 100px 50px 50px;
    grid-template-areas: "logo" "title" "text";
    margin: 30px auto;
    h1,
    h2 {
      text-align: center;
    }
    h1 {
      font-size: 40px;
    }
    img {
      width: 200px;
      height: 100px;
      justify-self: center;
      grid-area: logo;
    }
  }
}
</style>