class CanvasCore {
  constructor (canvasElementId) {
    this.canvasContainer = document.getElementById(canvasElementId)
    this.ctx = canvasContainer.getContext("2d")
    this.canvasHeight = this.canvasContainer.height
    this.canvasWidth = this.canvasContainer.width

    this.draw()
  }

  draw () {}
}

export default CanvasCore