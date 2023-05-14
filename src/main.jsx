import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import LogInPage from './LogInPage'
import '../pageCSS/LogInPage.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import EventCreatePage from './EventCreatePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/EventCreatePage" element={<EventCreatePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
