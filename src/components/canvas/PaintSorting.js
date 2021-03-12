import CanvasCore from './CanvasCore'
import { getRandomArray } from '../../utils/array'

/**
 * 排序算法绘制
 * @class PaintSorting
 * @extends {CanvasCore}
 */
class PaintSorting extends CanvasCore {
  constructor (canvasElementId) {
    super(canvasElementId)
    // 待排序数组
    this.arrayToSort = getRandomArray(10)
    this.draw()
  }

  // 绘制全部矩形
  draw () {
    // 一个矩形的宽度
    const oneRectWidth = this.canvasWidth / this.arrayToSort.length
    // 根据画布高度和数组个数，将矩形高度平分
    const perRectHeight = this.canvasHeight / this.arrayToSort.length

    this.arrayToSort.forEach((item, index) => {
      this.drawOneRect(
        oneRectWidth * index,
        this.canvasHeight - item * perRectHeight,
        oneRectWidth,
        item * perRectHeight
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
}

export default PaintSorting