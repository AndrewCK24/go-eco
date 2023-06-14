import mongoose from "mongoose";

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
		// validate: {
		// 	validator: function (value) {
		// 		if (value.begDate < value.endDate) {
		// 			return true;
		// 		} else if (value.begDate === value.endDate) {
		// 			return value.begTime < value.endTime;
		// 		} else {
		// 			return false;
		// 		}
		// 	},
		// 	message: "End date must be after start date",
		// },
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

const Event = mongoose.model("Event", eventSchema);
export default Event;