import { WebSocket, WebSocketServer } from "ws";


const wss=new WebSocketServer({port:8081});


wss.on("connection",(socket)=>{

    socket.send(JSON.stringify({
        message : "hii from ws-server"
    }))
})