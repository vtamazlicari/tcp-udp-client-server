# tcp-udp-client-server

Minimal TCP and UDP client/server examples in Node.js (labs 5 and 6), built only on the core `net` and `dgram` modules. No dependencies.

## Requirements

- Node.js (any recent version)

## Files

| File | Protocol | What it does |
| --- | --- | --- |
| `tcp-server.js` | TCP | Listens on port `2000`. On each connection it logs the socket addresses, sends `RESPONSE`, and logs incoming data and socket events (`data`, `drain`, `end`, `error`, `timeout`). |
| `tcp-client.js` | TCP | Connects to `127.0.0.1:2000`, sends three messages, and logs the server's reply and socket events. |
| `udp-server.js` | UDP | Binds to port `3000` and logs each datagram with its sender info (`rinfo`). |
| `udp-client.js` | UDP | Sends a single `Hello` datagram to `localhost:3000`. |

## Usage

Start the server first, then run the client in a second terminal.

TCP:

```sh
node tcp-server.js
node tcp-client.js
```

UDP:

```sh
node udp-server.js
node udp-client.js
```

None of the scripts exit on their own. Stop them with `Ctrl+C`.

## Notes

- TCP is a stream, so the client's three writes may reach the server as one combined `data` event.
- UDP needs no connection. The client sends even when no server is listening, and the datagram is silently dropped.
