'use strict';

const net = require('net');

const connection = socket => {

  console.dir({
    localAddress: socket.localAddress,
    localPort: socket.localPort,
    remoteAddress: socket.remoteAddress,
    remoteFamily: socket.remoteFamily,
    remotePort: socket.remotePort,
    bufferSize: socket.bufferSize,
  });

  socket.write('RESPONSE');

  socket.on('data', data => {
    console.log('Event: message', data);
    console.log('Data:', data.toString());
  });

  socket.on('drain', () => {
    console.log('Event: socket is empty');
  });

  socket.on('end', () => {
    console.log('Event: finish');
    console.dir({
      bytesRead: socket.bytesRead,
      bytesWritten: socket.bytesWritten,
    });
  });

  socket.on('error', err => {
    console.log('Event: error');
    console.log(err);
  });

  socket.on('timeout', () => {
    console.log('Event: timeout');
  });

};

const tcpServer = net.createServer();

tcpServer.on('connection', connection);

tcpServer.listen(2000);
