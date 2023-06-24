const connectMongoDB = require("./utils/connect-mongodb.cjs");
const Event = require("./models/event.cjs");
const User = require("./models/user.cjs");

exports.handler = async (event) => {
	try {
		await connectMongoDB.handler();
		const { eventId } = JSON.parse(event.body);
		console.log(`Finding event with ID ${eventId}...`);
		const foundEvent = await Event.findById(eventId);
		console.log(
			`Found event with ID ${eventId}: ${JSON.stringify(foundEvent)}`
		);
		const { hostId } = foundEvent;
		console.log(`Finding host with ID ${hostId}...`);
		const foundHost = await User.findById(hostId);
		console.log(`Found host with ID ${hostId}: ${JSON.stringify(foundHost)}`);
		const { name, avatar, picture } = foundHost;
		const output = {
			...foundEvent._doc,
			hostName: name,
			hostAvatar: avatar,
			hostPicture: picture,
		};
		console.log(output);

		return {
			statusCode: 200,
			body: JSON.stringify(output),
		};
	} catch (error) {
		console.error(`Error: ${error}`);
		return {
			statusCode: 500,
			body: error.toString(),
		};
	}
};
