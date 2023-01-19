import React from 'react';
import { Link } from 'react-router-dom';
import './Cont.css';

const Cont = () => 
{
  return (
    <>
      <div className="square">
        <div className="square-content">
          <Link className="square-button" to="/adaugaExp">Adauga experienta!</Link>
          <Link className="square-button" to="/experiente">Rasfoieste experiente!</Link>
          <Link className="square-button" to="/expTale">Experientele tale</Link>
          <Link className="square-button" to="/">Delogare</Link>
        </div>
      </div>
    </>
  );
};

export default Cont;
