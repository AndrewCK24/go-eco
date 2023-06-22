const connectMongoDB = require("./utils/connect-mongodb.cjs");
const Event = require("./models/event.cjs");

exports.handler = async (event) => {
	try {
		await connectMongoDB.handler();
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
