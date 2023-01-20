const express = require('express')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

const app = express()

const now = dayjs()
const time1 = dayjs().tz('Asia/Taipei')
const time2 = dayjs.tz(now, 'Asia/Taipei')

app.get('/', (req, res) => {
  res.send({
    status: 'OK',
    now,
    time1,
    time2
  })
})


console.log(`${now}(now)\n${time1}(time1)\n${time2}(time2)\n`)

app.listen(3000, () => {
  console.log('app is running on port 3000')
})
