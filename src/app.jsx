import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";

// React Component
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";
import ProposalPage from "./pages/ProposalPage";
import EventCreatePage from "./pages/EventCreatePage";
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

const App = () => {
	return (
		<HashRouter>
			<NavBar />
			<Container>
				<PageContainer>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/RegisterPage" element={<RegisterPage />} />
						<Route path="/LogInPage" element={<LogInPage />} />
						<Route path="/EventCreatePage" element={<EventCreatePage />} />
						<Route
							path="/EventCreatePage/ProposalPage"
							element={<ProposalPage />}
						/>
						<Route path="/UserPage" element={<UserPage />} />
						<Route path="/UserPage/MyActivity" element={<MyActivity/>} />
					</Routes>
				</PageContainer>
				<Footer />
			</Container>
		</HashRouter>
	);
};

export default App;
