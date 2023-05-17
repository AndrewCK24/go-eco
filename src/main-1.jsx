import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/Nav/NavBar";
import BottomNav from "./components/Nav/BottomNav";
import HomePage from "./HomePage";
import LogInPage from "./LogInPage";
import ProposalPage from "./ProposalPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import EventCreatePage from "./EventCreatePage";

const Container = styled.div`
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
