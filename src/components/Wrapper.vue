<template>
  <!-- <div>原始随机数组{{ JSON.stringify(rawRandomArr) }}</div> -->
  <!-- <div>响应式随机数组{{ JSON.stringify(reactiveArrTodoSort) }}</div> -->
  <!-- <div>步骤{{ JSON.stringify(oneStepRecord) }}</div> -->
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
      rawRandomArr: [],
      reactiveArrTodoSort: [],
      oneStepRecord: [],
      allArray: [],
      res: {}
    }
  },
  mounted () {
    const res = new PaintSorting('canvasContainer', this.onChange)
    this.rawRandomArr = res.rawRandomArr
    this.reactiveArrTodoSort = res.reactiveArrTodoSort
    this.oneStepRecord = res.oneStepRecord
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