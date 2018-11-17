import express from 'express'
import { MySQLORM } from '../config/orm'
import { connection } from '../config/connection'

const router = express.Router()
const orm = new MySQLORM(connection)

router.get('/', (req, res) => {
  orm.selectAllBurgers().then(burger => res.render('index', { burger }))
})

router.post('/add', (req, res) => {
  const { burger_name } = req.body
  try {
    orm.insertBurger(burger_name).then(res.redirect('/'))
  } catch (e) {
    console.log('Error inserting burger', e)
  }
})

router.post('/eat/:id', (req, res) => {
  const { id } = req.params
  try {
    orm.eatBurger(id).then(res.redirect('/'))
  } catch (e) {
    console.log('Error eating burger', e)
  }
})

export { router }
