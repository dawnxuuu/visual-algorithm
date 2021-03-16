import { getRandomArray } from '../../utils/array'

/**
 * 排序算法绘制
 * @class SortingCore
 * @extends {CanvasCore}
 */
class SortingCore {
  constructor () {
    // 原始随机数组
    this.rawRandomArr = getRandomArray(50)
    // 经过响应式改造的随机数组，对它进行排序
    this.reactiveArrTodoSort = []
    // 记录一个算法步骤中应该如何画出所有元素矩形
    this.oneStepRecord = []
    // 最终要展示的所有步骤
    this.allStepsRecordFinallyShow = []

    this.defineReactiveArr()
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
          self.collectGetterSetter()
          return item.value
        },
        set (newValue) {
          item.value = newValue
          self.collectGetterSetter()
          return null
        }
      })
    })
  }

  // 累积收集所有步骤，每个步骤中都包含N(N为待排序数组长度)个要展示的矩形元素，
  // 每个步骤中选中的元素要被标记为active:true
  collectGetterSetter () {
    const oneStep = this.oneStepRecord.map((item, index) => {
      return {
        value: item.value,
        index: item.index,
        active: item.active
      }
    })

    this.allStepsRecordFinallyShow.push(oneStep)
  }
}

export default SortingCore