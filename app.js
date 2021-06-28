const express = require('express');
const fetch = require('node-fetch')
const app = express();
const path = require('path');
require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
})

            
app.use(express.static('public'))
             
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`)
})