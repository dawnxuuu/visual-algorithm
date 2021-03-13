export const quickSort = `
  function quick (array, left, right) {
    let index
    if (array.length > 1) {
      index = partition(array, left, right)
      if (left < index - 1) {
        quick(array, left, index - 1)
      }
      if (index < right) {
        quick(array, index, right)
      }
    }
    return array
  }

  // 分治函数
  function partition (array, left, right) {
    // 用index取中间值而非splice
    const pivot = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right

    while (i <= j) {
      while (array[i] < pivot) {
        i++
      }
      while (array[j] > pivot) {
        j--
      }
      if (i <= j) {
        swap(array, i, j)
        i++
        j--
      }
    }
    return i
  }

  // 交换
  function swap (array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]]
  }

  return quick(array, 0, array.length - 1)
`