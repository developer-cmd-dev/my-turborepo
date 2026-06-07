import {WebSocket, WebSocketServer} from 'ws';


const wss = new WebSocketServer({
    port:8080
})

wss.on('connection',async(ws ,req)=>{
    console.log('Websocket is running on 8080')
  
})