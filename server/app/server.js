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

app.listen(config.port, () => {
	console.log('* SERVER RUNNING ON', config.port)
})
