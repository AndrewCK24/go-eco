const mongoose = require("mongoose");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const User = require("./models/user.cjs");

exports.handler = async (event) => {
	try {
		// decode google userId from credential
		const { credential } = JSON.parse(event.body);
		const ticket = await client.verifyIdToken({
			idToken: credential,
			audience: process.env.GOOGLE_CLIENT_ID,
		});
		const payload = ticket.getPayload();
		console.log(payload);
		const userId = payload["sub"];

		// find user by userId in mongodb
		console.log("Connecting to MongoDB...");
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			bufferCommands: false,
		});
		console.log("Connected to MongoDB.");
		const user = await User.findOne({ socialId: userId });
		if (user) {
			console.log("User found.");
			return {
				statusCode: 200,
				body: JSON.stringify({ ...user, login: true }),
			};
		} else {
			console.log("User not found. Creating new user...");
			const { email, given_name, family_name, picture } = payload;
			const data = {
				socialId: userId,
				email,
				name: {
					given: given_name,
					family: family_name,
				},
				picture,
				events: {
					registered: [],
					following: [],
				},
			};
			const createdUser = new User(data);
			await createdUser.save();
			console.log("New user created.");
			return {
				statusCode: 200,
				body: JSON.stringify({ ...createdUser}),
			};
		}
	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};
