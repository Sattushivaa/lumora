const ws = require("ws").Server;
const server = new ws({port:8080});

server.on("connection",(websocket,req)=>{
    websocket.send("welcome bro!");
})