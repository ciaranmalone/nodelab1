import http from 'http';
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT
// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello  World!');
});

server.listen(port);

console.log('server running at ${port}');