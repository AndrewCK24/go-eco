import { connect, find } from "mongoose";
import Event from "../../models/event.js";

export async function handler(event, context) {
	console.log("Starting function execution...");

	try {
		connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to MongoDB...");

		const events = await find().sort({ "eventDate.begDate": -1 }).limit(10);
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
}
