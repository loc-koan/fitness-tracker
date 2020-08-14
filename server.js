const express = require('express');
// const mongojs = require('mongojs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

/* from 17.26 */ 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { 
  /* named DB workout to match seed */
  useNewUrlParser: true,
  useFindAndModify: false
});

/* routes folder */
app.use(require('./routes/route-api.js'));
app.use(require('./routes/route-html.js'));

// db.on('error', error => {
//   console.log('Database Error:', error);
// });

app.listen(PORT, () => {
  console.log('App running on port 3000!');
});
