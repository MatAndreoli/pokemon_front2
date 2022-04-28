<template>
  <div class="home"><router-view /></div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  top: 0;
  bottom: 0;
  min-height: 90vh;
  background: linear-gradient(#f00, rgb(250, 133, 0), rgb(255, 160, 50)) no-repeat;
  background-size: cover;
  color: #fff;
}
</style>
