const ws = require("ws").Server;
const mongoClient = require("mongodb").MongoClient;
const client = new mongoClient("mongodb+srv://teamlead:Satyam%40123@cluster0.a7kmctr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{});
async function run(){
// let x = await client.db("users").collection("creds").insertOne({
//     username : "sattu",
//     password : "1234",
//     role : "user"
// });
// console.log(x);
await client.connect();
const server = new ws({port:8080});

server.on("connection",(websocket,req)=>{
    websocket.on("message",(data)=>{
        data = JSON.parse("data");
        switch(data.type){
            case "login":   manageLogin(data);
                            break;
            case "signup":  manageSignup(data);
                            break;
            case "rescue_request" :     handleRescueRequest(data);
                                        break;
            case "predict_disaster" :   sendDisasterData(data);
                                        break;
        }
    })
})

}
run()