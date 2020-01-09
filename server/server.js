/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.use('/loaderio-47cd774ac6c1ede74ef41ec65df5fe65.txt', express.static(path.join(__dirname, '../public/loaderio-47cd774ac6c1ede74ef41ec65df5fe65.txt')));

const optionsEstimates = {
  target: 'http://54.153.106.164:80/', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  // pathRewrite: {
  //   '^/api': '/api/estimates', // rewrite path
  // },
};
const apiProxyEstimates = proxy(optionsEstimates);
app.use('/api/estimates/', apiProxyEstimates);

// const optionsImages = {
//   target: 'http://52.9.82.201:3003/', // target host
//   changeOrigin: true, // needed for virtual hosted sites
//   ws: true, // proxy websockets
//   // pathRewrite: {
//   //   '^/api': '/api/estimates', // rewrite path
//   // },
// };
// const apiProxyImages = proxy(optionsImages);
// app.use('/api/images/', apiProxyImages);

// const optionsCHO = {
//   target: 'http://3.15.39.58:3001/', // target host
//   changeOrigin: true, // needed for virtual hosted sites
//   ws: true, // proxy websockets
//   // pathRewrite: {
//   //   '^/api': '/api/estimates', // rewrite path
//   // },
// };
// const apiProxyCHO = proxy(optionsCHO);
// app.use('/api/costHomeOwnership/', apiProxyCHO);

const port = 3000;
app.listen(port, console.log(`listening on ${port}`));

// http://localhost:3000/api/pricing/1
