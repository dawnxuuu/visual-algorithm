<template>
  <div>
    {{ JSON.stringify(arrayToSort) }}
  </div>
  <div>
    <canvas id="canvasContainer" width="500" height="500"></canvas>
  </div>
</template>

<script>
import PaintSorting from './canvas/PaintSorting'

export default {
  name: 'Wrapper',
  data () {
    return {
      arrayToSort: []
    }
  },
  mounted () {
    const res = new PaintSorting('canvasContainer')
    this.arrayToSort = res.arrayToSort
  },
}
</script>

<style scoped>
  canvas { border: 1px solid black; }
</style>