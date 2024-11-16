import { react, useState } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import VotingPage from './pages/VotingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/voting" element={<VotingPage/>}/>
        {/* <Route path="/" element={<AdminPage/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
