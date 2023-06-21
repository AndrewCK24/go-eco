const connectMongoDB = require("./utils/connect-mongodb.cjs");
const User = require("./models/user.cjs");

exports.handler = async (event) => {
	try {
		await connectMongoDB.handler();
		const userData = JSON.parse(event.body);
		const user = new User(userData);
		await user.save();
		console.log("New user created.");
		return {
			statusCode: 200,
			body: JSON.stringify(user),
		};
	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};
