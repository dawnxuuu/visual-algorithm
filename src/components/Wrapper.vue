<template>
  <div>
    <canvas id="canvasContainer" width="500" height="500"></canvas>
  </div>
</template>

<script>
import PaintSorting from './canvas/PaintSorting'
import { quickSort } from './raw-function-code/sorting'

export default {
  name: 'Wrapper',
  data () {
    return {
      reactiveArrTodoSort: [],
      allArray: [],
      res: {}
    }
  },
  mounted () {
    const res = new PaintSorting('canvasContainer', this.onChange)
    this.reactiveArrTodoSort = res.reactiveArrTodoSort
    this.res = res
    this.execute()
  },
  methods: {
    execute () {
      const evalCode = `
        (function () {
          return function (array) {
            return function () {
              ${quickSort}
            }
          }
        })()
      `
      window.eval(evalCode)(this.reactiveArrTodoSort)()
    },
    onChange (a) {
      this.allArray.push(a)
      this.drawArray()
    },
    drawArray () {
      setTimeout(() => {
        console.log('=xu=')
        this._drawArray()
      }, 1000);
    },
    _drawArray () {
      this.res.draw(this.allArray.shift())
    }
  },
}
</script>

<style scoped>
  canvas { border: 1px solid black; }
</style>