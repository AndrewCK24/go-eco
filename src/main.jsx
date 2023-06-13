import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./main.css";
import App from "./app";
import { RecoilRoot } from "recoil";

// import AWS from "aws-sdk";

// AWS.config.update({
// 	region: "ap-northeast-1",
// 	// endpoint: "https://irpjdm5ilvcsplrc3nwzn3hzeq.appsync-api.ap-northeast-1.amazonaws.com/graphql",
// 	accessKeyId: import.meta.env.VITE_REACT_APP_AWS_ACCESS_KEY_ID,
// 	secretAccessKey: import.meta.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY,
// });

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	// </React.StrictMode>
);
