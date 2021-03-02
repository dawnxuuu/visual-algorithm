<template>
  <div>
    <canvas id="canvasContainer" width="500" height="500"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  data () {
    return {

    }
  },
  mounted () {
    const canvasContainer = document.getElementById('canvasContainer')
    const ctx = canvasContainer.getContext("2d")

    ctx.fillStyle = "#1a0701";
    ctx.fillRect (10, 10, 10, 200);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 55, 50);

    console.log('=xu=', ctx)
  },
}
</script>

<style scoped>
  canvas { border: 1px solid black; }
</style>