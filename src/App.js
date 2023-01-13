

import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  

  return (
    
    <main className="column">
      <h1>Cardels</h1>
      
      
      <LoginButton />
      <LogoutButton />
    </main>
  );
}

export default App; 