import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import BottomNav from "./components/Nav/BottomNav";
import HomePage from "./HomePage";
import LogInPage from "./LogInPage";
import ProposalPage from "./ProposalPage";
import EventCreatePage from "./EventCreatePage";

// 基礎 style 設定
const Container = styled.div`
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
`;

const App = () => {
  return (
    <HashRouter>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LogInPage" element={<LogInPage />} />
          <Route path="/EventCreatePage" element={<EventCreatePage />} />
          <Route
            path="/EventCreatePage/ProposalPage"
            element={<ProposalPage />}
          />
        </Routes>
        <BottomNav />
      </Container>
    </HashRouter>
  );
};

export default App;
