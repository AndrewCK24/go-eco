const connectMongoDB = require("./utils/connect-mongodb.cjs");
const Event = require("./models/event.cjs");

exports.handler = async (event, context) => {
	try {
		await connectMongoDB.handler();
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
