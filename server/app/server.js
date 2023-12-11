const mongoose = require("mongoose");

const config = require("./config/config");
const app = require("./app");


// NOTE: connect to db
mongoose.connect(config.mongo_uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('* CONNECTED TO DB')
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error)
	})

const server = app.listen(config.port, () => {
	console.log('* SERVER RUNNING ON', config.port)
})

const io = socket(server, {
	cors: {
		origin: [
			'http://localhost:3000',
		]
	}
})

io.on('connection', (socket) => {
	socket.on('send-message', (message, chat_id) => {
		socket.to(chat_id).emit('receive-message', message)
	})

	socket.on('join-chat', (chat_id) => {
		if (socket.lastRoom) {
			socket.leave(socket.lastRoom)
			socket.lastRoom = null
		}

		socket.join(chat_id)
		socket.lastRoom = chat_id
	})
})
