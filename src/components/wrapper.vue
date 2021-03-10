<template>
  <div>
    <canvas id="canvasContainer" width="500" height="500"></canvas>
  </div>
</template>

<script>
import CanvasDraw from './CanvasDraw'

export default {
  name: 'Wrapper',
  data () {
    return {

    }
  },
  mounted () {
    new CanvasDraw('canvasContainer')
  },
}
</script>

<style scoped>
  canvas { border: 1px solid black; }
</style>