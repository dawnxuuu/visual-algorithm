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

export const heapSort = `
  let heapSize = array.length
  buildHeap(array)

  while(heapSize > 1) {
    heapSize--
    swap(array, 0, heapSize)
    heapify(array, heapSize, 0)
  }

  // 交换函数
  function swap (array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]]
  }

  function buildHeap (array) {
    let heapSize = array.length
    for(let i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, heapSize, i)
    }
  }

  function heapify (array, heapSize, i) {
    const left = i * 2 + 1
    const right = i * 2 + 2
    let largest = i

    if (left < heapSize && array[left] > array[largest]) {
      largest = left
    }

    if (right < heapSize && array[right] > array[largest]) {
      largest = right
    }

    if (largest !== i) {
      swap(array, i, largest)
      heapify(array, heapSize, largest)
    }
  }

  return array
`

export const mergeSort = `
function merge (left, right) {
  var result = []
  var il = 0
  var ir = 0

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
  }

  while (il < left.length) {
    result.push(left[il++])
  }

  while (ir < right.length) {
    result.push(right[ir++])
  }

  return result
}

function mergeSortRec (array) {
  var length = array.length
  if (length === 1) {
    return array
  }
  var mid = Math.floor(length / 2)
  var left = array.slice(0, mid)
  var right = array.slice(mid, length)

  return merge(mergeSortRec(left), mergeSortRec(right))
}

return mergeSortRec(array)
`