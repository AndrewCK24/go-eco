import AWS from "aws-sdk";

AWS.config.update({
	region: "ap-northeast-1",
	accessKeyId: import.meta.env.VITE_REACT_APP_AWS_ACCESS_KEY_ID,
	secretAccessKey: import.meta.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const findOrCreateUser = async (id) => {
	try {
		const params = {
			TableName: "User-goeco",
			Key: {
				id: id,
			},
		};

		const existingUser = await dynamoDb.get(params).promise();

		if (existingUser.Item) {
			// 找到相同的使用者物件
      console.log("login success:", existingUser.Item);
			return existingUser.Item;
		} else {
			// 在資料表中建立新的使用者物件
			const newUser = {
				id: id,
				// 其他使用者屬性...
			};

			const createParams = {
				TableName: "User-goeco",
				Item: newUser,
			};

			await dynamoDb.put(createParams).promise();
      console.log("create new user:", newUser);
			return newUser;
		}
	} catch (error) {
		console.error("發生錯誤：", error);
		throw error;
	}
};
