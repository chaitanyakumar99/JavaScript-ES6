
let count = 0

const intervalId = setInterval(() => {
    count += 1;
    console.log(`This message will appear after 1 seconds. count: ${count}`)
    if (count === 10) {
      clearInterval(intervalId)
      console.log('Interval cleared')
    }
},1000)