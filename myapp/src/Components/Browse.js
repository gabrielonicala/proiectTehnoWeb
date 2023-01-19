import React, { useState } from 'react';
import './Browse.css';

const calculDurata = (oraPlecare, oraSosire) => 
{
    return String(((Date.parse(`2023-01-01T${oraSosire}`) - Date.parse(`2023-01-01T${oraPlecare}`)) / (1000 * 60 ))) + " de minute";
}

const Browse = () => 
{
  const [experiences, setExperiences] = useState([
    {
      idExperienta: 1,
      punctPlecare: "Bucuresti",
      punctSosire: "Timisoara",
      mijlocTransport: "Tren",
      oraPlecare: "08:00",
      oraSosire: "10:41",
      durataCalatorie: "15 ore",
      gradAglomerare: "Mediu",
      observatii: "Nimic de mentionat",
      nivelSatisfactie: "Ridicat"
    },
    {
      idExperienta: 2,
      punctPlecare: "Bucuresti",
      punctSosire: "Iasi",
      mijlocTransport: "Autobuz",
      oraPlecare: "14:00",
      oraSosire: "18:00",
      durataCalatorie: "4 ore",
      gradAglomerare: "Ridicat",
      observatii: "Trafic aglomerat",
      nivelSatisfactie: "Mediu"
    },
    {
      idExperienta: 3,
      punctPlecare: "Timisoara",
      punctSosire: "Sibiu",
      mijlocTransport: "Autoturism",
      oraPlecare: "08:00",
      oraSosire: "10:00",
      durataCalatorie: "2 ore",
      gradAglomerare: "Scazut",
      observatii: "Drum liber",
      nivelSatisfactie: "Foarte ridicat"
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExperiences, setFilteredExperiences] = useState(experiences);

  const handleSearch = event => 
  {
    setSearchTerm(event.target.value);
    setFilteredExperiences(experiences.filter(experience => 
      Object.values(experience).join().toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };

  return (
    <div className="browsePage">
      <div className = "searchBar">
        <input type="text" placeholder="Cauta experienta" onChange={handleSearch} />
      </div>
      <div>
        {filteredExperiences.map(experience => (   
          <div className="experience-item" key={experience.idExperienta}>
            <p>Punct plecare: {experience.punctPlecare}</p>
            <p>Punct sosire: {experience.punctSosire}</p>
            <p>Mijloc de transport: {experience.mijlocTransport}</p>
            <p>Ora plecare: {experience.oraPlecare}</p>
            <p>Ora sosire: {experience.oraSosire}</p>
            <p>Durata calatorie: {calculDurata(experience.oraPlecare,experience.oraSosire)}</p>
            <p>Grad aglomerare: {experience.gradAglomerare}</p>
            <p>Observatii: {experience.observatii}</p>
            <p>Nivel satisfactie: {experience.nivelSatisfactie}</p>
        </div>
        ))}
      </div>
     </div>
    );
};

export default Browse;
