import express from 'express'
import exphbs from 'express-handlebars'
import { router } from './controllers/burgers_controller'
import bodyParser from 'body-parser'

const app = express()
const PORT = 8080

//orm.insertBurger('BigBurger').then((res) => console.log(res))

//orm.selectAllBurgers().then(res => console.log(res))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//use body parser to parse forms
//note this must be above the use of the router
app.use(bodyParser.urlencoded({ extended: true }))
//use the routes we created
app.use(router)
// serve static content like our css file
app.use(express.static('public'))

app.listen(PORT, () =>
  console.log(`Burger server is hungrily awaiting requests on port ${PORT}`)
)
