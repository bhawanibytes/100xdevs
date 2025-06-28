import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port: 8080})

let totalUser = 0
let allSockets : WebSocket[] = []
wss.on("connection", (socket:WebSocket)=>{
    totalUser++
    allSockets.push(socket)
    console.log(`${totalUser}th user connected with following socket: ${JSON.stringify(socket)} `)
    socket.send(`Hi you are ${totalUser}th user and your socket is: ${JSON.stringify(socket)}`)
    socket.on("message",( message )=>{
        console.log(message.toString())
        allSockets.forEach( s => {
            if(s!= socket){
             s.send(message.toString())
            }
        })
    })
})

wss.on("close", (socket: WebSocket) => {
    const index = allSockets.indexOf(socket)
    allSockets.splice(index, 1)
})

console.log(wss.address())