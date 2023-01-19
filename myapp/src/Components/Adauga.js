import React, { useState } from 'react';
import './Adauga.css';

const Adauga = () => 
{
  const [punctPlecare, setPunctPlecare] = useState('');
  const [punctSosire, setPunctSosire] = useState('');
  const [mijlocTransport, setMijlocTransport] = useState('');
  const [oraPlecare, setOraPlecare] = useState('');
  const [oraSosire, setOraSosire] = useState('');
  const [gradAglomerare, setGradAglomerare] = useState('');
  const [observatii, setObservatii] = useState('');
  const [nivelSatisfactie, setNivelSatisfactie] = useState('');

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    console.log('punctPlecare', punctPlecare);
    console.log('punctSosire', punctSosire);
    console.log('mijlocTransport', mijlocTransport);
    console.log('oraPlecare', oraPlecare);
    console.log('oraSosire',oraSosire);
    console.log('gradAglomerare',gradAglomerare);
    console.log('observatii',observatii);
    console.log('nivelSatisfactie',nivelSatisfactie);

    window.location.href = '/cont';
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label>
        Punct de plecare:
        <input type="text" value={punctPlecare} onChange={(e) => setPunctPlecare(e.target.value)} />
      </label>
      <br />
      <label>
        Punct de sosire:
        <input type="text" value={punctSosire} onChange={(e) => setPunctSosire(e.target.value)} />
      </label>
      <br />
      <label>
        Mijloc de transport:
        <input type="text" value={mijlocTransport} onChange={(e) => setMijlocTransport(e.target.value)} />
      </label>
      <br />
      <label>
        Ora de plecare:
        <input type="text" value={oraPlecare} onChange={(e) => setOraPlecare(e.target.value)} />
      </label>
      <br />
      <label>
        Ora de sosire:
        <input type="text" value={oraSosire} onChange={(e) => setOraSosire(e.target.value)} />
      </label>
      <br />
      <label>
        Grad de aglomerare:
        <input type="text" value={gradAglomerare} onChange={(e) => setGradAglomerare(e.target.value)} />
      </label>
      <br />
      <label>
        Observatii:
        <input type="text" value={observatii} onChange={(e) => setObservatii(e.target.value)} />
      </label>
      <br />
      <label>
        Nivel satisfactie:
        <input type="text" value={nivelSatisfactie} onChange={(e) => setNivelSatisfactie(e.target.value)} />
      </label>
      <br />
      <input type="submit" value="Adauga!" />
    </form>
  );
};

export default Adauga;
