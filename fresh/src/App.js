import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import AppBar from './components/AppBar';
import Main from './components/Main';
import './css/main.min.css'
const App = () => {
  return (
    <div className="App">
    <Router >
      <Routes basename="/">
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Main />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;