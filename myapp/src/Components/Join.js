import React, { useState } from 'react';
import './Join.css';

const Join = () => 
{
  const [adresaMail, setAdresaMail] = useState('');
  const [parola, setParola] = useState('');
  const [prenume, setPrenume] = useState('');
  const [nume, setNume] = useState('');
  const [nrTelefon, setNrTelefon] = useState('');

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    console.log('adresaMail', adresaMail);
    console.log('parola', parola);
    console.log('prenume', prenume);
    console.log('nume', nume);
    console.log('nrTelefon', nrTelefon);
  };

  return (
    <><div className="welcome-bar">Devino membru!</div>
    <form className="joinForm" onSubmit={handleSubmit}>
      <label>
        Nume:
        <input type="text" value={nume} onChange={(e) => setNume(e.target.value)} />
      </label>
      <br />
      <label>
        Prenume:
        <input type="text" value={prenume} onChange={(e) => setPrenume(e.target.value)} />
      </label>
      <br />
      <label>
        Adresa de e-mail:
        <input type="email" value={adresaMail} onChange={(e) => setAdresaMail(e.target.value)} />
      </label>
      <br />
      <label>
        Parola:
        <div className="passwordField">
          <input type="password"  value={parola} onChange={(e) => setParola(e.target.value)} />
        </div>
      </label>
      <br />
      <label>
        Numar de telefon:
        <input type="tel" value={nrTelefon} onChange={(e) => setNrTelefon(e.target.value)} />
      </label>
      <br />
      <input type="submit" value="Inregistreaza-te!" />
    </form></>
  );
};

export default Join;
