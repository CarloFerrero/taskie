// Step 1: Creare un Context
// Prima di tutto, creiamo un nuovo context utilizzando createContext. 
// Questa funzione prende un valore predefinito come argomento.


import { createContext } from 'react';

// Creare un context con un valore predefinito
// const UserContext = createContext(null);

// Step 2: Fornire il Context
// Il componente Provider viene utilizzato per impostare il valore corrente per il context 
// all'interno di un albero di componenti. Qualsiasi componente sotto il Provider può accedere a questo valore.

import React, { useState } from 'react';

function App() {
  // Stato per mantenere i dati dell'utente corrente
  const [user, setUser] = useState({ name: 'Carlo', age: 30 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Profile />
    </UserContext.Provider>
  );
}

// Step 3: Consumare il Context
// Infine, puoi utilizzare l'hook useContext per consumare il valore del context in un componente funzionale.

import React, { useContext } from 'react';

function Profile() {
  // Utilizzare useContext per consumare il UserContext
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>{`Nome: ${user.name}, Età: ${user.age}`}</h1>
      <button onClick={() => setUser({ name: 'Marco', age: 25 })}>
        Cambia Utente
      </button>
    </div>
  );
}

// Esempio Completo: 

import React, { createContext, useState, useContext } from 'react';

// Step 1: Creare un Context
const UserContext = createContext(null);

function App() {
  // Step 2: Fornire il Context
  const [user, setUser] = useState({ name: 'Carlo', age: 30 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  // Step 3: Consumare il Context
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>{`Nome: ${user.name}, Età: ${user.age}`}</h1>
      <button onClick={() => setUser({ name: 'Marco', age: 25 })}>
        Cambia Utente
      </button>
    </div>
  );
}

export default App;