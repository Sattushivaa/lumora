//const server = new WebSocket("wss://lumora-tihk.onrender.com",[]);                    // production
const server = new WebSocket("ws://localhost:8080",["h"]);                              // development
server.onmessage=(m)=>console.log(m.data);