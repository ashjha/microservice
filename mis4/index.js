const http = require('http');

// const hostname = '127.0.0.1';
const port = 5000;
const misNumber = 4;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`This is microservice ${misNumber} runnung on port ${port}`);
});

server.listen(port, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Server running at http://localhost:${port}/`);
});