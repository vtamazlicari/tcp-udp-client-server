'use strict';

const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.dir({ msg: msg.toString(), rinfo });
});

server.bind(3000);
