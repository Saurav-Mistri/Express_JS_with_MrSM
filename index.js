const { publicDecrypt } = require('crypto')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const smMiddleware = (req, res, next)=>{
//   console.log("req");
//   console.log(req);
//   // to execute next middleware we use next() 
//   next();
// }

app.use(express.static(path.join(__dirname, "public")))
// app.use(smMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World! ' + req.params.name)
})

app.get('/about', (req, res) => {
  // res.send('about!')
  // res.sendFile(path.join(__dirname, 'index.html'))
  // res.status(200)
  res.json({ "SM": 21 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
