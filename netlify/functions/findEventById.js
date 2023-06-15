import mongoose from "mongoose";
// import Event from "../../models/event";

const eventSchema = new mongoose.Schema({
	hostId: {
		// ID of the user who created the event
		type: String,
		required: true,
	},
	timestamp: {
		// Date of creation
		type: Date,
		required: true,
	},
	name: {
		// Name of the event
		type: String,
		required: true,
	},
	eventDate: {
		begDate: {
			type: String,
			required: true,
		},
		begTime: {
			type: String,
			required: true,
		},
		endDate: {
			type: String,
			required: true,
		},
		endTime: {
			type: String,
			required: true,
		},
	},
	applyDate: {
		endDate: {
			type: String,
			required: true,
		},
	},
	type: {
		type: String,
		required: true,
	},
	introduction: {
		brief: {
			type: String,
			required: true,
		},
		detail: {
			type: String,
			required: true,
		},
	},
	location: {
		name: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
	},
	volunteers: {
		// List of volunteers' id
		type: [String],
		required: true,
	},
});

const Event = mongoose.model("Event", eventSchema, "Event");

export const handler = async (event) => {
	if (!mongoose.connections[0].readyState) {
		console.log("Connecting to MongoDB...");
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			bufferCommands: false,
		});
		console.log("Connected to MongoDB.");
	}
	try {
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
