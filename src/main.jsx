import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./main.css";
import App from "./app";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en";
import { deDE } from "@mui/x-date-pickers";

ReactDOM.createRoot(document.getElementById("root")).render(
	<RecoilRoot>
		<GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
			<LocalizationProvider
				dateAdapter={AdapterDayjs}
				adapterLocale="en"
				locale="en"
				localeText={
					deDE.components.MuiLocalizationProvider.defaultProps.localeText
				}
			>
				<App />
			</LocalizationProvider>
		</GoogleOAuthProvider>
	</RecoilRoot>
);
