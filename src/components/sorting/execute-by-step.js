function executeByStep (allStepsRecord, drawFn, gapTime) {
  const genTimer = time => new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })

  const promiseArr = allStepsRecord.map(item => () => genTimer(gapTime).then(() => {
    drawFn(item)
    return null
  }))

  const mergeExecute = (asyncArr) => {
    async function helper (fnArr) {
      const promises = []
      for (const fn of fnArr) {
        promises.push(await fn())
      }
      return Promise.all(promises)
    }

    return helper(asyncArr)
  }

  console.time('可视化步骤执行时间')
  mergeExecute(promiseArr).then((data)=> {
    console.log('done')
    console.timeEnd('可视化步骤执行时间')
  })
}

export default executeByStep