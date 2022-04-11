<template>
  <div class="home">
    <div class="content">
      <img src="@/assets/pokemon-logo.png" />
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
    grid-template-areas: "logo" "title" "text";

    margin: 30px auto;

    h1,
    h2 {
      text-align: center;
      grid-area: text;
      margin-bottom: 0.5%;
    }
    h1 {
      font-size: 40px;
      grid-area: title;
      margin-top: -4%;
    }
    img {
      margin-top: -6%;
      width: 300px;
      height: 300px;

      justify-self: center;
      grid-area: logo;
    }
  }
}
</style>