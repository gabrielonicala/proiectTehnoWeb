import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Login from './Components/Login.js';
import Join from './Components/Join.js';
import Browse from './Components/Browse.js';
import Square from './Components/Square.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Square/>} />
        <Route path="/inregistrare" element={<Join/>} />
        <Route path="/logare" element={<Login/>} />
        <Route path="/experiente" element={<Browse/>} />
      </Routes>
    </Router>
  );
};

export default App;