const net = require('net');
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Message from server: ', data)
  });
 
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: CLO');
  });

  return conn;
};

module.exports = connect;