const express = require('express');
const axios = require('axios');
const request = require('request');
const morgan = require('morgan');
const port = 8000;

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  request('https://api.chucknorris.io/jokes/random', (err, data) => {
    if (err) {
      console.error('error getting joke:', err);
    } else {
      res.send(data.body);
    }
  })
})


app.listen(port, () => console.log(`listening on port ${port}`));