// import path from 'path';
// import fs from 'fs';

// import React from 'react';
// import express from 'express';
// import ReactDOMServer from 'react-dom/server';
const express = require('express');

var bouncer = require ("express-bouncer")(500, 900000, 30);
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
app.get('/', bouncer.block, async (req, res) => {
  res.sendFile(path.join(__dirname + '/izvinite2.html'));
})

app.post('/py0re%C3%84%C3%A4%C3%A4ni', bouncer.block, async (req, res) => {
  // wipe store
  bouncer.addresses = { };
  res.status(200).json({message:'success'})
})

app.get('/:id', bouncer.block, async (req, res) => {
  res.sendFile(path.join(__dirname + '/izvinite.html'));
})


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
