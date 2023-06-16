const mongoose = require("mongoose");
const Event = require("./models/event.cjs");

exports.handler = async (event, context) => {
	console.log("Starting function execution...");
	try {
		mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			bufferCommands: false,
		});
		console.log("Connected to MongoDB...");

		const events = await Event.find()
			.sort({ "eventDate.begDate": -1 })
			.limit(10);
		console.log(`Found ${events.length} events...`);

		return {
			statusCode: 200,
			body: JSON.stringify(events),
		};
	} catch (error) {
		console.error(`Error: ${error}`);

		return {
			statusCode: 500,
			body: JSON.stringify({ message: "Internal Server Error" }),
		};
	}
};
