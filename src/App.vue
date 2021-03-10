<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <crapper></crapper>
</template>

<script>
import Crapper from './components/Crapper.vue'

export default {
  components: {
    Crapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>