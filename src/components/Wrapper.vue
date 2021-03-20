<template>
  <div>
    <canvas id="canvasContainer" width="500" height="500"></canvas>
  </div>
</template>

<script>
import SortingCore from './sorting/SortingCore'
import CanvasSorting from './canvas/CanvasSorting'
import { quickSort } from './raw-function-code/sorting'
import executeByStep from './sorting/execute-by-step'

export default {
  name: 'Wrapper',
  data () {
    return {
      sortLength: 10, // 待排序数组长度
      gapTime: 100, // 间隔时间
      sortingCore: {},
      canvasSorting: {}
    }
  },
  mounted () {
    this.sortingCore = new SortingCore(this.sortLength)
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

      console.time('算法执行时间')
      window.eval(evalCode)(this.sortingCore.reactiveArrTodoSort)()
      console.timeEnd('算法执行时间')
      this.drawAllSteps()
    },
    drawAllSteps () {
      const canvasSorting = new CanvasSorting('canvasContainer', this.sortLength)
      executeByStep(this.sortingCore.allStepsRecordFinallyShow, canvasSorting.draw, this.gapTime)
    }
  },
}
</script>

<style scoped>
  canvas { border: 1px solid black; }
</style>