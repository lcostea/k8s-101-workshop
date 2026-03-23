const http = require('http');
const port = 3000;

// setting default values if variables not found
const connectionTimeout = process.env.CONNECTION_TIMEOUT || "30";
const logLevel = process.env.LOG_LEVEL || "ERROR";

const server = http.createServer((req, res) => {
  if (req.url === '/config') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({
      message: "Configuration values:",
      connectionTimeout: connectionTimeout,
      log_level: logLevel
    }, null, 2));
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Use /config to see the settings!\n');
});

server.listen(port, () => {
  console.log(`Server is listening. LOG_LEVEL: ${logLevel}, Connection Timeout: ${connectionTimeout}`);
});
