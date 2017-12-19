const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/index', (req, res) => res.render('pages/index'))
  .get('/servicos', (req, res) => res.render('pages/servicos'))
  .get('/sobre', (req, res) => res.render('pages/sobre'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))