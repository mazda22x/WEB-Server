var express = require('express');
var router = express.Router();
var expressWs = require('express-ws')(router);

const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3030 })
console.log("WS started")
router.ws('/',(ws,req)=>{
    ws.on('connection', ws => {
        ws.send('ho!')
    
    });
        
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
        ws.send(`Echo: ${message}`);
    })

})

module.exports = router;