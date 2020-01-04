/* eslint-disable no-console */
const express = require('express');
const proxy = require('http-proxy-middleware');

const options = {
  target: 'http://localhost:3002', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/api': '/api/estimates', // rewrite path
  },
};

const apiProxy = proxy(options);
const app = express();

app.use('/api', apiProxy);

const port = 3000;
app.listen(port, console.log(`listening on ${port}`));

// http://localhost:3000/api/pricing/1
