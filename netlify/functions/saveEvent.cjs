const mongoose = require("mongoose");
const Event = require("./models/event.cjs");

exports.handler = async (event) => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			bufferCommands: false,
		});
		const eventData = JSON.parse(event.body);
		const newEvent = new Event(eventData);
		await newEvent.save();

		return {
			statusCode: 200,
			body: JSON.stringify(newEvent),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: error.toString(),
		};
	}
};
