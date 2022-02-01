const express = require('express');
const { countries } = require('./autocomplete/countries');
const app = express()

const port = 3001;

app.get('/api', (req, res) => {
  res.send('Hello World')
})

app.get('/api/autocomplete', (req, res) => {
  const { searchQuery } = req.query;

  if (searchQuery) {
    res.status(200).send(countries);
    return;
  }
  res.status(200).send([]);
})


app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
