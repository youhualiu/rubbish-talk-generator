// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generateTalk')

// engine template setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body-parser setting
app.use(bodyParser.urlencoded({ extended: true }))

// route setting
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  let sentence = generateTalk(option)
  console.log(option)
  res.render('index', { sentence: sentence, option: option })
})

// turn on the route
app.listen(port, () => {
  console.log(`Express is listening on localhost${port}`)
})