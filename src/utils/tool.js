export function getRandomArray (count) {
  let array = []

  for (let i = 0; i < count; i++) {
    array[i] = i + 1
  }

  array.sort(() => 0.5 - Math.random())

  return array
}

export function getRandomColor () {
  return '#'+('00000'+ (Math.random()*0x1000000<<0).toString(16)).substr(-6)
}

export function getRandomColor2 () {
  return '#' + (function(color){
    return (color += '0123456789abcdef'[Math.floor(Math.random()*16)]) && (color.length == 6) 
      ? color
      : arguments.callee(color)
  })('')
}
