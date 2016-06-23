const Hapi = require('hapi');
const PORT = 8081;

const server = new Hapi.Server();
server.connection({ port : PORT });

server.start( err => {
  if (err) throw err;
  console.log(`Server Running at: ${server.info.uri}`);
});