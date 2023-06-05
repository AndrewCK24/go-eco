import AWS from "aws-sdk";

AWS.config.update({
	region: "ap-northeast-1",
	accessKeyId: import.meta.env.VITE_REACT_APP_AWS_ACCESS_KEY_ID,
	secretAccessKey: import.meta.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const createEvent = async (event) => {
	const params = {
		TableName: "Event-goeco",
		Item: event,
	};
	try {
		await dynamoDb.put(params).promise();
		console.log("event created:", event);
	} catch (error) {
		console.log("event create error:", error);
	}
};

export const findEventsByType = async (type, num) => {
	try {
		const params = {
			TableName: "Event-goeco",
			FilterExpression: "#eventType = :typeValue",
			ExpressionAttributeNames: {
				"#eventType": "type",
			},
			ExpressionAttributeValues: {
				":typeValue": type,
			},
			Limit: num,
		};

		const result = await dynamoDb.scan(params).promise();
		const events = result.Items;

		return events;
	} catch (error) {
		console.error("發生錯誤：", error);
		throw error;
	}
};
