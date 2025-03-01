const { publicDecrypt } = require('crypto')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    // res.send('about!')
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(200)
    res.json({"SM": 21})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
