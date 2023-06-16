import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./main.css";
import App from "./app";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
		<RecoilRoot>
			<App />
		</RecoilRoot>
);
