const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	socialId: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	name: {
		given: {
			type: String,
			required: true,
		},
		family: {
			type: String,
			required: true,
		},
	},
	picture: {
		type: String,
		required: true,
	},
	avatar: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	birthday: {
		type: Date,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	nationalId: {
		type: String,
		required: true,
	},
	events: {
		registered: {
			type: [String],
		},
		following: {
			type: [String],
		},
	},
});

const User = mongoose.model("User", userSchema, "users");
module.exports = User;
