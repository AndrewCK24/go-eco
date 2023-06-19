import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./main.css";
import App from "./app";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
	<RecoilRoot>
		<GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
			<App />
		</GoogleOAuthProvider>
	</RecoilRoot>
);
