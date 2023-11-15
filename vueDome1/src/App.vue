// app.vue
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

// Home.vue
<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
