<template>
  <div>原始随机数组{{ JSON.stringify(rawRandomArr) }}</div>
  <div>响应式随机数组{{ JSON.stringify(reactiveArrTodoSort) }}</div>
  <div>步骤{{ JSON.stringify(oneStepRecord) }}</div>
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
      oneStepRecord: []
    }
  },
  mounted () {
    const res = new PaintSorting('canvasContainer')
    this.rawRandomArr = res.rawRandomArr
    this.reactiveArrTodoSort = res.reactiveArrTodoSort
    this.oneStepRecord = res.oneStepRecord
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
    }
  },
}
</script>

<style scoped>
  canvas { border: 1px solid black; }
</style>