const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let body = '';
  req
    .on('data', (slice) => {
      body = body + slice;
    })
    .on('end', () => {
      console.log(body);
    })

    .setTimeout(() => {
      res.end('Hello World\n');
    }, 100);
});

server.listen(port, () => {
  console.log(`Server running at http://${port}/`);
});
