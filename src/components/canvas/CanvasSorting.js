import CanvasCore from './CanvasCore'

class CanvasSorting extends CanvasCore {
  constructor (canvasElementId, sortLength) {
    super(canvasElementId)
    // 待排序数组长度
    this.sortLength = sortLength
    // 一个矩形的宽度
    this.oneRectWidth = this.canvasWidth / this.sortLength
    // 根据画布高度和数组个数，将矩形高度平分
    this.perRectHeight = this.canvasHeight / this.sortLength
  }

  // 绘制全部矩形
  draw (oneStepArr) {
    this.clearCanvas()
    oneStepArr.forEach((item, index) => {
      this.drawOneRect(
        this.oneRectWidth * index,
        this.canvasHeight - item.value * this.perRectHeight,
        this.oneRectWidth,
        item.value * this.perRectHeight
      )
    })
  }

  // 绘制一个描边填充矩形
  drawOneRect (x, y, width, height) {
    this.ctx.fillStyle = "#4fd"
    this.ctx.fillRect(x, y, width, height)

    this.ctx.strokeStyle = 'blue'
    this.ctx.lineWidth = 2
    this.ctx.strokeRect(x, y, width, height)
  }

  // 清除画布
  clearCanvas () {
    this.ctx.fillStyle = '#707070'
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
  }
}

export default CanvasSorting