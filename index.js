const express = require('express')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

const app = express()
const year = dayjs().tz('Asia/Taipei').year()

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    year
  })
})


console.log(year)
