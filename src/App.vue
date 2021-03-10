<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <wrapper></wrapper>
</template>

<script>
import Wrapper from './components/Wrapper.vue'

export default {
  components: {
    Wrapper
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