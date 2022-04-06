<template>
  <div class="pokemon-list">
    <Pokemon-Item
      v-for="pokemon of getList"
      :key="pokemon.id"
      :img="pokemon.front_default"
      :name="pokemon.name"
      @pokemonEvent="goToDetail(pokemon.id)"
    />
  </div>
</template>

<script>
import PokemonItem from "./PokemonItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { PokemonItem },
  name: "PokemonList",
  computed: {
    ...mapGetters(["getList"]),
  },
  methods: {
    ...mapActions(['setPokemonList', 'setDetail']),
    goToDetail(id) {
      this.setDetail(id);
      this.$router.push({ name: "detailView", params: { id } });
    },
  },
  async created() {
    if (this.getList.length > 0) {
      return;
    }
    await this.$store.dispatch("setPokemonList");
  },
};
</script>

<style lang="scss" scoped>
.pokemon-list {
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
}
</style>
