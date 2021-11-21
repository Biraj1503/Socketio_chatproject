const express = require('express')
const app = express()

const http = require('http')

const expressServer = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(expressServer)

// chat app 

io.on('connect', (socket)=>{
	console.log('User Connect Now')
	socket.on('message send',(msg)=>{
		io.emit("message show", msg)
	})

	socket.on('disconnect',()=>console.log("User Disconnect Now"))
})

//Name Space

/*let nps1 = io.of('/sell')
nps1.on('connect', (socket)=>{
	console.log('User Connect Now')
	socket.on('message send',(msg)=>{
		nps1.emit("message show", msg)
	})

	socket.on('disconnect',()=>console.log("User Disconnect Now"))
})*/

// create Room

/*io.on('connection', (socket)=>{
	socket.join('kithen')
	let roomSize = io.sockets.adapter.rooms.get("kithen").size
	io.sockets.to("kithen").emit("coking","we Are Coking Now")
	io.sockets.to("kithen").emit("hungry", "We are hungry now" +roomSize)
})*/
app.get('/',(req,res,next)=>{
	res.sendFile(__dirname +'/index.html')
})

expressServer.listen('3000',()=>console.log(`Server Is Ready To Now...`))