import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";

// React Component
import NavBar from "./components/Nav/TopNav";
import BottomNav from "./components/Nav/BottomNav";
import HomePage from "./HomePage";
import LogInPage from "./LogInPage";
import ProposalPage from "./ProposalPage";
import EventCreatePage from "./EventCreatePage";

// 基礎 style 設定
const Container = styled.div`
	width: 100%;
  min-height: 100vh;
	display: grid;
	grid-template-rows: 1fr auto;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 16px;
	font-family: "Poppins", sans-serif;
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
					</Routes>
				</PageContainer>
				<BottomNav />
			</Container>
		</HashRouter>
	);
};

export default App;
