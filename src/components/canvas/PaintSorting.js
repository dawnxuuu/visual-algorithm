import CanvasCore from './CanvasCore'

class PaintSorting extends CanvasCore {
  constructor (canvasElementId) {
    super(canvasElementId)
  }

  draw () {
    this.ctx.fillStyle = "#1a0701";
    this.ctx.fillRect (0, 300, 10, 200);

    this.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    this.ctx.fillRect (30, 30, 55, 50);
  }
}

export default PaintSorting