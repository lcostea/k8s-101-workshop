const http = require('http');
const port = 3000;

let isHealthy = true;
let isReady = false;

// Wait 10 seconds until the app starts
setTimeout(() => {
  isReady = true;
  console.log('Ready to receive traffic!');
}, 10000);

const server = http.createServer((req, res) => {
  // Liveness Probe: Are you still alive?
  if (req.url === '/healthy') {
    if (isHealthy) {
      res.writeHead(200);
      return res.end('OK - I am alive');
    } else {
      res.writeHead(500);
      return res.end('FAIL - I am broken');
    }
  }

  // Readiness Probe: Are you still ready to receive traffic?
  if (req.url === '/ready') {
    if (isReady) {
      res.writeHead(200);
      return res.end('OK - I am ready');
    } else {
      res.writeHead(503); // Service Unavailable
      return res.end('FAIL - Still warming up...');
    }
  }

  // Use this to break the app down
  if (req.url === '/break') {
    isHealthy = false;
    return res.end('Liveness will fail soon!\n');
  }

  
  res.writeHead(200);
  res.end('Hello! Status: ' + (isReady ? 'Ready' : 'Warming up') + '\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
