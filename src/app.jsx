import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";

// React Component
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Nav/Footer";
import HomePage from "./HomePage";
import LogInPage from "./LogInPage";
import ProposalPage from "./ProposalPage";
import EventCreatePage from "./EventCreatePage";
import UserPage from "./UserPage";

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
						<Route path="/LogInPage" element={<LogInPage />} />
						<Route path="/EventCreatePage" element={<EventCreatePage />} />
						<Route
							path="/EventCreatePage/ProposalPage"
							element={<ProposalPage />}
						/>
						<Route path="/UserPage" element={<UserPage />} />
					</Routes>
				</PageContainer>
				<Footer />
			</Container>
		</HashRouter>
	);
};

export default App;
