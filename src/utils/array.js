export function getRandomArray (count) {
  let array = []

  for (let i = 0; i < count; i++) {
    array[i] = i + 1
  }

  array.sort(() => 0.5 - Math.random())

  return array
}