import CanvasCore from './CanvasCore'
import { getRandomColor } from '../../utils/tool'

const UNREACTIVE_COLOR = '#135f4c' // 非活动矩形颜色
const CANVAS_BG_COLOR = '#707070' // 画布背景色
const STROKE_COLOR = '#fff' // 描边色

class CanvasSorting extends CanvasCore {
  constructor (canvasElementId, sortLength) {
    super(canvasElementId)
    // 待排序数组长度
    this.sortLength = sortLength
    // 一个矩形的宽度
    this.oneRectWidth = this.canvasWidth / this.sortLength
    // 根据画布高度和数组个数，将矩形高度平分
    this.perRectHeight = this.canvasHeight / this.sortLength

    this.draw = this.draw.bind(this)
  }

  // 绘制全部矩形
  draw (oneStepArr) {
    this.clearCanvas()
    oneStepArr.forEach((item, index) => {
      this.drawOneRect(
        this.oneRectWidth * index,
        this.canvasHeight - item.value * this.perRectHeight,
        this.oneRectWidth,
        item.value * this.perRectHeight,
        item.active ? getRandomColor() : UNREACTIVE_COLOR
      )
    })
  }

  // 绘制一个描边填充矩形
  drawOneRect (x, y, width, height, fillColor) {
    this.ctx.fillStyle = fillColor
    this.ctx.fillRect(x, y, width, height)

    this.ctx.strokeStyle = STROKE_COLOR
    this.ctx.lineWidth = 1
    this.ctx.strokeRect(x, y, width, height)
  }

  // 清除画布
  clearCanvas () {
    this.ctx.fillStyle = CANVAS_BG_COLOR
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
  }
}

export default CanvasSorting