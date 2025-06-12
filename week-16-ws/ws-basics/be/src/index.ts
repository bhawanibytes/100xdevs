import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080 })

wss.on("connection", function(socket){
    console.log('user connected')
    socket.send('dhappa')
    socket.on('message', (e)=>{
        console.log(e.toString())
        socket.send(`${e.toString()}`)
    })
})
