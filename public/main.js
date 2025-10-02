const server = new WebSocket("wss://lumora-tihk.onrender.com",[]);
server.onmessage=(m)=>console.log(m.data);