const net = require("net");
const connect = require("../../d3-net/net_example/client");

// establishes a connection with the game server
/*const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Message from server: ', data)
  });

  return conn;
};*/

console.log("Connecting ...");
connect();