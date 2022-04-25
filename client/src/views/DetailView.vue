<template>
  <div class="card" v-if="getDetail">
    <div class="pokemon_img">
      <img :src="getDetail.front_default" alt="" />
    </div>
    <h1>{{ camelCase(getDetail.name) }}</h1>
    <div class="details">
      <div class="detail">
        <h3 class="title">Pokemon Types/Tipo</h3>
        <ul>
          <li :class="type" v-for="type of getDetail.types" :key="type">
            {{ camelCase(type) }}
          </li>
        </ul>
      </div>
      <div class="detail">
        <h3 class="title">Abilities/Habilidade</h3>
        <ul>
          <li
            class="ability"
            v-for="ability of getDetail.abilities"
            :key="ability"
          >
            {{ camelCase(ability) }}
          </li>
        </ul>
      </div>
    </div>
    <div class="buttonClose">
      <button @click="goToHome" id="close" class="close">Close/Fechar</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import pokemon from "../gateways/pokemon_api";

export default {
  name: "DetailView",
  computed: {
    ...mapGetters(["getDetail", "getList", "getLimit"]),
  },
  methods: {
    ...mapActions(["setPokemonList", "setDetail"]),
    camelCase(str) {
      return str
        .split(" ")
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join("");
    },
    goToHome() {
      this.$router.push({ name: "home", params: { limit: this.getLimit } });
    },
  },
  async created() {
    if (this.getList.length > 0) {
      return;
    }
    const list = await pokemon.getPokemonList(this.getLimit);
    await this.setPokemonList(list);
    setTimeout(async () => {
      await this.setDetail(this.$route.params.id);
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 30%;
  margin-left: 35%;
  margin-top: 5%;
  padding: 4px;

  display: grid;
  grid-template-columns: 100%;
  justify-content: center;

  text-align: center;
  background-color: #ddd;
  color: #000;

  border-radius: 5px;

  .details {
    margin-top: 4%;
    margin-left: 15%;
    width: 70%;

    .detail {
      margin-top: 3%;
    }
  }

  .pokemon_img {
    margin-top: -70px;
    padding-top: 14px;
    margin-left: 38%;
    width: 130px;
    height: 130px;

    border-radius: 50%;

    background-color: #fbcb37;
    box-shadow: 1px 7px 16px grey;
  }

  .title {
    text-align: start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.253);
  }

  h1 {
    margin-top: 3%;
  }

  ul {
    list-style: none;
    display: flex;

    .ability {
      padding: 4px 14px;

      background-color: #ddd;
      border: 3px solid green;
      color: green;
    }
  }

  li {
    margin-top: 5px;
    margin-left: 7px;
    padding: 8px 10px;

    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;

    border-radius: 24px;

    &.grass {
      background-color: green;
    }
    &.poison {
      background-color: #f0f;
    }
    &.fire {
      background-color: rgb(255, 60, 0);
    }
    &.water {
      background-color: rgb(0, 132, 255);
    }
    &.bug {
      background-color: rgb(65, 0, 82);
    }
    &.flying {
      background-color: rgb(39, 163, 157);
    }
    &.normal {
      background-color: rgb(65, 175, 107);
    }
    &.ice {
      background: linear-gradient(120deg, rgb(0, 68, 255), rgb(16, 207, 255), rgb(162, 227, 243));
    }
    &.ghost {
      background: linear-gradient(120deg, rgb(95, 0, 90), rgb(168, 18, 255),rgb(212, 70, 255));
    }
    &.electric {
      background: linear-gradient(120deg, rgb(248, 112, 0), rgb(253, 207, 0));
    }
    &.rock {
      background: linear-gradient(120deg, rgb(66, 66, 66), rgb(180, 180, 180));
    }
    &.fighting {
      background-color: rgb(160, 160, 160);
    }
    &.ground {
      background: linear-gradient(120deg, rgb(112, 54, 0), rgb(180, 87, 0));
    }
    &.psychic {
      background: linear-gradient(120deg, rgb(84, 0, 133), rgb(136, 32, 255));
    }
    &.fairy {
      background: linear-gradient(120deg, rgb(189, 30, 238), rgb(253, 24, 177));
    }
    &.dark {
      background-color: rgb(0, 0, 0);
    }
    &.steel{
      background: linear-gradient(120deg, rgb(124, 124, 124), rgb(201, 201, 201));
    }
    &.dragon{
      background: linear-gradient(120deg, rgb(255, 0, 0), rgb(252, 113, 0), rgb(255, 175, 71));
    }
  }

  img {
    width: 100px;
    height: 100px;
  }

  .buttonClose {
    height: 100px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    .close {
      align-self: center;
      width: 30%;
      padding: 6px 10px;

      background-color: #e2978c;
      color: #fff;
      font-weight: bold;
      font-size: 1.2em;

      border: none;
      border-radius: 7px;

      cursor: pointer;
    }
  }
}
</style>