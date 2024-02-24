import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/create_employee" element={<CreateEmployee />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
