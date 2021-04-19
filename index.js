const express = require('express');
const app = express();
const mysql = require('mysql');

// ! missing the call for createConnection, check out example below
// const connection = mysql
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'media_db'
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'media_db'
});

// ! Since the SQL query is a string you're escaping the string like this, you have a few options here. You could omit them around the column names and values and that would work or use a different string identifier i.e. you could use double quotes to surround your SQL string. Best practice would be to use a prepared statement I have shown that below. Also connection is capitalized remember JS is case sensitive.
// Connection.query('INSERT INTO books('book_id','book_title', 'book_author') VALUES ('8', 'Five Little Pumpkins', 'Ben Manle')', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
connection.query(
	"INSERT INTO books('book_id','book_title', 'book_author') VALUES (?, ?, ?)",
	[8, 'Five Little Pumpkins', 'Ben Manle'],
	(err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	}
);

connection.query('SELECT * FROM movie', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});

connection.query(
	'UPDATE music SET music_title = Nina WHERE music_id=5',
	(err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	}
);

connection.query('DELETE FROM movie WHERE movie_id = 123456', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});

// ! You just have a "." instead of a ","
// app.listen(3000. () => {
//     console.log('>>> Server Running<<<')
// })
app.listen(3000, () => {
	console.log('>>> Server Running<<<');
});
