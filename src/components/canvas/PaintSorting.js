import CanvasCore from './CanvasCore'
import { getRandomArray } from '../../utils/array'

/**
 * 排序算法绘制
 * @class PaintSorting
 * @extends {CanvasCore}
 */
class PaintSorting extends CanvasCore {
  constructor (canvasElementId, changeFun) {
    super(canvasElementId)
    this.changeFun = changeFun

    // 原始随机数组
    this.rawRandomArr = getRandomArray(10)
    // 经过响应式改造的随机数组，对它进行排序
    this.reactiveArrTodoSort = []
    // 记录一个算法步骤中应该如何画出所有元素矩形
    this.oneStepRecord = []

    // this.draw()
    this.defineReactiveArr()
  }

  // 绘制全部矩形
  draw (arr) {
    this.clearCanvas()
    // 一个矩形的宽度
    const oneRectWidth = this.canvasWidth / this.rawRandomArr.length
    // 根据画布高度和数组个数，将矩形高度平分
    const perRectHeight = this.canvasHeight / this.rawRandomArr.length
    arr.forEach((item, index) => {
      this.drawOneRect(
        oneRectWidth * index,
        this.canvasHeight - item.value * perRectHeight,
        oneRectWidth,
        item.value * perRectHeight
      )
    })
  }

  // 绘制一个描边填充矩形
  drawOneRect (x, y, width, height) {
    this.ctx.fillStyle = "#4fd"
    this.ctx.fillRect(x, y, width, height)

    this.ctx.strokeStyle = 'blue'
    this.ctx.lineWidth = 4
    this.ctx.strokeRect(x, y, width, height)
  }

  getArrToSort () {
    return this.oneStepRecord.map((item, index) => {
      return {
        value: item.value,
        index: item.index,
        active: item.active
      }
    })
  }

  defineReactiveArr () {
    const self = this
    // 遍历原始随机数组
    this.rawRandomArr.forEach((value, index) => {
      const item = {
        value,
        index,
        active: false
      }
      this.oneStepRecord.push(item)

      // 定义一个新的响应式数组，将对此数据进行排序。
      // 算法对此数组进行排序时，触发getter/setter，从而记录每一步算法步骤
      Object.defineProperty(this.reactiveArrTodoSort, index, {
        get () {
          self.changeFun(self.getArrToSort())
          return item.value
        },
        set (newValue) {
          item.value = newValue
          self.changeFun(self.getArrToSort())
          return null
        }
      })
    })
  }

  clearCanvas () {
    this.ctx.fillStyle = '#707070'
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
  }
}

export default PaintSorting