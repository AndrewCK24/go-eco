import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from "@emotion/styled";
// import { Amplify, API } from "aws-amplify";
// import awsconfig from "./aws-exports";

// React Component
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";
import ProposalPage from "./pages/ProposalPage";
import EventCreatePage from "./pages/EventCreatePage";
import KnowledgePage from "./pages/KnowledePage";
import BeachCleanPage from "./pages/BeachCleanPage";
import RecyclePage from "./pages/RecyclePage";
import UserPage from "./pages/UserPage";
import MyActivity from "./pages/MyActivity";

const Container = styled.div`
	width: 100%;
	min-height: 100%;
	display: grid;
	grid-template-rows: 1fr auto;
	overflow: overlay;
`;

const PageContainer = styled.main`
	width: 100%;
	grid-row: 1 / 2;
	overflow-x: hidden;
`;

// Amplify.configure(awsconfig);

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
			<NavBar />
			<Container>
				<PageContainer>
					<Routes>
						<Route path="/go-eco/" element={<HomePage />} />
						<Route path="/go-eco/register" element={<RegisterPage />} />
						<Route path="/go-eco/login" element={<LogInPage />} />
						<Route path="/go-eco/event-create" element={<EventCreatePage />} />
						<Route
							path="/go-eco/event-create/proposal"
							element={<ProposalPage />}
						/>
						<Route path="/go-eco/user" element={<UserPage />} />
						<Route path="/go-eco/user/activities" element={<MyActivity />} />
						<Route path="/go-eco/knowledge" element={<KnowledgePage />}>
							<Route index element={<BeachCleanPage />} />
							<Route path="/go-eco/knowledge" element={<BeachCleanPage />} />
							<Route path="/go-eco/knowledge/recycle" element={<RecyclePage />} />
						</Route>
					</Routes>
				</PageContainer>
				<Footer />
			</Container>
			</BrowserRouter>
		</RecoilRoot>
	);
};

export default App;
