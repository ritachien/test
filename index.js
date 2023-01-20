const express = require('express')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

const app = express()

const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
// const time1 = dayjs.valueOf().tz('Asia/Taipei')
// const time2 = dayjs.tz(now.valueOf(), 'Asia/Taipei')
const taipeiTime = dayjs.utc().add(8, 'hours').format('YYYY-MM-DD HH:mm:ss')
app.get('/', (req, res) => {
  res.send({
    status: 'OK',
    now,
    time1,
    time2
  })
})


console.log(`${now}(serverTime)\n${taipeiTime}(taipeiTime)`)

app.listen(3000, () => {
  console.log('app is running on port 3000')
})
