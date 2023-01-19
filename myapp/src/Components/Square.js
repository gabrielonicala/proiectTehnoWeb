import React from 'react';
import { Link } from 'react-router-dom';
import './Square.css';

const Square = () => 
{
  return (
    <>
      <div className="square">
        <div className="square-content">
          <Link className="square-button" to="/join">Inregistreaza-te!</Link>
          <Link className="square-button" to="/login">Logheaza-te!</Link>
          <Link className="square-button" to="/experiences">Rasfoieste experiente!</Link>
        </div>
      </div>
    </>
  );
};

export default Square;
