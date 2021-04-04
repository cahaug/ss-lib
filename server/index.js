// import path from 'path';
// import fs from 'fs';

// import React from 'react';
// import express from 'express';
// import ReactDOMServer from 'react-dom/server';
const express = require('express');

// import App from '../src/App';
var path = require('path');
const PORT = process.env.PORT || 4242;
const app = express();

// app.get('/', (req, res) => {
//   const app = ReactDOMServer.renderToString(<App />);

//   const indexFile = path.resolve('./build/index.html');
//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//     );
//   });
// });

// app.use(express.static('./build'));
// const izviniteHTML = require('../server/izvinite.html')
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname + '/izvinite2.html'));
})

app.get('/:id', async (req, res) => {
  res.sendFile(path.join(__dirname + '/izvinite.html'));
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
