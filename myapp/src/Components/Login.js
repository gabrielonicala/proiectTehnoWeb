import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [adresaMail, setAdresaMail] = useState('');
  const [parola, setParola] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a request to the server to authenticate the user
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <label>
        Adresa de e-mail:
        <input
          type="email"
          value={adresaMail}
          onChange={(event) => setAdresaMail(event.target.value)} />
      </label>
      <br />
      <label>
        Parola:
        <input
          type="password"
          value={parola}
          onChange={(event) => setParola(event.target.value)} />
      </label>
      <br />
      <input type="submit" value="Logheaza-te!" />
    </form>
  );
};

export default Login;