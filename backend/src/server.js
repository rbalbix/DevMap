const http = require('http');
const app = require('./app');
const { setupWebSocket } = require('./websocket');

// To linten websocket protocol
const server = http.Server(app);
setupWebSocket(server);

require('../src/database').connect();

// ease to deploy || Verify the environment
const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log('@port', PORT);
});
