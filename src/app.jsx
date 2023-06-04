import { HashRouter, Route, Routes } from "react-router-dom";
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
		<HashRouter>
			<NavBar />
			<Container>
				<PageContainer>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/registerpage" element={<RegisterPage />} />
						<Route path="/loginpage" element={<LogInPage />} />
						<Route path="/eventcreatepage" element={<EventCreatePage />} />
						<Route
							path="/eventcreatepage/proposalpage"
							element={<ProposalPage />}
						/>
						<Route path="/userpage" element={<UserPage />} />
						<Route path="/knowledgepage" element={<KnowledgePage />}>
							<Route index element={<BeachCleanPage />} />
							<Route path="/knowledgepage" element={<BeachCleanPage />} />
							<Route path="/knowledgepage/2" element={<RecyclePage />} />
						</Route>
					</Routes>
				</PageContainer>
				<Footer />
			</Container>
		</HashRouter>
	);
};

export default App;
