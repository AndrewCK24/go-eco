import mongoose from "mongoose";
import Event from "./models/event";

export const handler = async (event) => {
	try {
		console.log("Connecting to MongoDB...");
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			bufferCommands: false,
		});
		console.log("Connected to MongoDB.");
		const { eventId } = JSON.parse(event.body);
		console.log(`Finding event with ID ${eventId}...`);
		const foundEvent = await Event.findById(eventId);
		console.log(
			`Found event with ID ${eventId}: ${JSON.stringify(foundEvent)}`
		);

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
