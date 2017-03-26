const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const database = {
  todos: [
    { id: 1, text: 'Drink coffee', complete: false },
    { id: 2, text: 'Feed cat', complete: true },
  ],
}
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.route('/api/Todos')
  .get((req, res) => {
    res.send(database.todos)
  })
  .post((req, res) => {
    const newTodo = {
      id: 1 + database.todos.reduce((prevMax, cur) => Math.max(prevMax, cur.id), 0),
      text: req.body.text,
      complete: false,
    }
    database.todos.push(newTodo)
    res.send(200, newTodo)
  })

app.listen(3000, () => {
  console.log('API Server starts on localhost:3000')
})
