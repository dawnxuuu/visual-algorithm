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
      console.time('算法执行时间')
      window.eval(evalCode)(this.reactiveArrTodoSort)()
      console.timeEnd('算法执行时间')
      this.__drawArray()
    },
    onChange (a) {
      this.allArray.push(a)
    },
    __drawArray () {
      const genTimer = time => new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, time)
      })

      const promiseArr = this.allArray.map(item => () => genTimer(10).then(() => {
        this.res.draw(item)
        return null
      }))

      const mergeExecute = (asyncArr) => {
        async function helper (fnArr) {
          const promises = []
          for (const fn of fnArr) {
            promises.push(await fn())
          }
          return Promise.all(promises)
        }

        return helper(asyncArr)
      }

      console.time('可视化步骤执行时间')
      mergeExecute(promiseArr).then((data)=> {
        console.log('done')
        console.timeEnd('可视化步骤执行时间')
      })
    }
  },
}
</script>

<style scoped>
  canvas { border: 1px solid black; }
</style>