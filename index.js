const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'media_db'

Connection.query('INSERT INTO books('book_id','book_title', 'book_author') VALUES ('8', 'Five Little Pumpkins', 'Ben Manle')', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

connection.query('SELECT * FROM movie', (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

connection.query('UPDATE music SET music_title = Nina WHERE music_id=5', (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})


connection.query('DELETE FROM movie WHERE movie_id = 123456', (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

app.listen(3000. () => {
    console.log('>>> Server Running<<<')
})
