
class CanvasDraw {
  constructor (canvasElementId) {
    this.canvasContainer = document.getElementById(canvasElementId)
    this.ctx = canvasContainer.getContext("2d")

    this.draw()
  }

  draw () {
    this.ctx.fillStyle = "#1a0701";
    this.ctx.fillRect (0, 300, 10, 200);

    this.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    this.ctx.fillRect (30, 30, 55, 50);
  }
}

export default CanvasDraw