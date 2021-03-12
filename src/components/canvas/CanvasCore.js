/**
 * 存储画布信息
 * @class CanvasCore
 * canvasElementId 画布元素id
 */
class CanvasCore {
  constructor (canvasElementId) {
    this.canvasContainer = document.getElementById(canvasElementId)
    this.ctx = canvasContainer.getContext("2d")
    this.canvasHeight = this.canvasContainer.height
    this.canvasWidth = this.canvasContainer.width
  }
}

export default CanvasCore