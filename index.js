require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Prateek!')
})

app.get('/payment', (req, res)=>{
    res.send("<h1>This is the payment page</h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})