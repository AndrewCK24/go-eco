import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/Nav/NavBar'
import BottomNav from './components/Nav/BottomNav'
import HomePage from './HomePage'
import LogInPage from './LogInPage'
import ProposalPage from './ProposalPage'
import { HashRouter, Route, Routes } from 'react-router-dom'
import EventCreatePage from './EventCreatePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/EventCreatePage" element={<EventCreatePage />} />
        <Route path="/EventCreatePage/ProposalPage" element={<ProposalPage />} />
      </Routes>
    <BottomNav />
    </HashRouter>
  </React.StrictMode>,
)
