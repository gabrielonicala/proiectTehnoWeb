import React, { useState } from 'react';

const Login = () => {
  const [numeUtilizator, setNumeUtilizator] = useState('');
  const [parola, setParola] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a request to the server to authenticate the user
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nume utilizator:
        <input
          type="text"
          value={numeUtilizator}
          onChange={(event) => setNumeUtilizator(event.target.value)}
        />
      </label>
      <br />
      <label>
        Parola:
        <input
          type="password"
          value={parola}
          onChange={(event) => setParola(event.target.value)}
        />
      </label>
      <br />
      <button type="Intra in cont!">Log in</button>
    </form>
  );
};

export default Login;