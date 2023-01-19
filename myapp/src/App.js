import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Login from './Components/Login.js';
import Join from './Components/Join.js';
import Square from './Components/Square.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Square/>} />
        <Route path="/join" element={<Join/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;