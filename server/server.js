/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

const options = {
  target: 'http://54.67.110.125:3002/', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/api': '/api/estimates', // rewrite path
  },
};

const apiProxy = proxy(options);

app.use('/api', apiProxy);


const port = 3000;
app.listen(port, console.log(`listening on ${port}`));

// http://localhost:3000/api/pricing/1
