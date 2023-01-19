import React from 'react';
import { Link } from 'react-router-dom';
import './Square.css';

const Square = () => 
{
  return (
    <>
      <div className="square">
        <div className="square-content">
          <Link className="square-button" to="/inregistrare">Inregistreaza-te!</Link>
          <Link className="square-button" to="/logare">Logheaza-te!</Link>
          <Link className="square-button" to="/experiente">Rasfoieste experiente!</Link>
        </div>
      </div>
    </>
  );
};

export default Square;
