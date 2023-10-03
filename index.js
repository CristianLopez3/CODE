const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
  {
    name: 'Cristian',
    email: 'Cristian@mail.com'
  },
  {
    name: 'Alex',
    email: 'alex@hotmail.com'
  },
  {
    name: 'Maria',
    email: 'Maria@hotmail.com'
  }
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})