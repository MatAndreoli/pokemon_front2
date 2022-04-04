<template>
  <div class="card" v-if="getDetail">
    <h2>{{ camelCase(getDetail.name) }}</h2>
    <div>
      <img :src="getDetail.front_default" alt="" />
    </div>
    <div>
      <h3>Abilities</h3>
      <ul>
        <li v-for="ability of getDetail.abilities" :key="ability">
          {{ camelCase(ability) }}
        </li>
      </ul>
    </div>
    <div>
      <h3>Types</h3>
      <ul>
        <li v-for="type of getDetail.types" :key="type">
          {{ camelCase(type) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailView",
  computed: {
    ...mapGetters(["getDetail", "getList"]),
  },
  methods: {
    camelCase(str) {
      return str
        .split(" ")
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join("");
    },
  },
  async created() {
    if (this.getList.length > 0) {
      return;
    }
    await this.$store.dispatch("getPokemonList");
    setTimeout(() => {
      this.$store.commit("ADD_TO_DETAIL", this.$route.params.id);
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 20em;
  width: 30%;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30%;
  grid-template-rows: 10% 28% 20% 20%;
  justify-content: center;

  margin-left: 35%;
  margin-top: 2.1%;
  padding: 4px;

  text-align: center;
  background-color: #ddd;
  color: #000;

  border-radius: 5px;

  div {
    height: 100%;
  }

  h3 {
    margin-bottom: 2%;
  }
  ul {
    list-style: none;
  }

  img {
    width: 100px;
    height: 100px;
  }
}
</style>