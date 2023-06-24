const connectMongoDB = require("./utils/connect-mongodb.cjs");
const Event = require("./models/event.cjs");

exports.handler = async (event) => {
	try {
		await connectMongoDB.handler();
		const { participantId, eventId } = JSON.parse(event.body);
		console.log(`Finding event with ID ${eventId}...`);
		const foundEvent = await Event.findById(eventId);
		console.log(
			`Found event with ID ${eventId}: ${JSON.stringify(foundEvent)}`
		);
		foundEvent.volunteers.push(participantId);
		await foundEvent.save();
		return {
			statusCode: 200,
			body: JSON.stringify(foundEvent),
		};
	} catch (error) {
		console.error(`Error: ${error}`);
		return {
			statusCode: 500,
			body: error.toString(),
		};
	}
};
