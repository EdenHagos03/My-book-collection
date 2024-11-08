const express = require('express')
const path = require("path")
const conn = require('./db')

const booksController = require('./controllers/booksController');
// const moviesController = require('./controllers/moviesController')

const app = express();

app.get("/", booksController.getAllBooks)

// app.get('/', (req, res)=>{
//         conn.query('select * from Movies', (err, result)=>{
//         res.json(result)

//         })
// })
app.listen(5000)