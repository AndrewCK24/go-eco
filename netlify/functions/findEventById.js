import { connect } from "mongoose";
import Event from "../../models/event";

export const handler = async (event) => {
	try {
		connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const { eventId } = JSON.parse(event.body);
		const foundEvent = await Event.findById(eventId);

		return {
			statusCode: 200,
			body: JSON.stringify(foundEvent),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: error.toString(),
		};
	}
};
