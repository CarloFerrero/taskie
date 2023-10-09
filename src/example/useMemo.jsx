// useMemo:
// 1. useMemo è un hook che memorizza il valore calcolato per evitare calcoli ridondanti in render successivi.
// 2. Accetta una funzione calcolatrice e un array di dipendenze. useMemo eseguirà la funzione solo se almeno una delle dipendenze è cambiata.

import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    // ...potrebbero esserci molti altri utenti
  ]);

  // Utilizziamo useMemo per memorizzare il valore calcolato della lista filtrata
  const filteredUsers = useMemo(() => {
    console.log('Eseguo il filtro'); // Questo log apparirà solo quando cambia searchTerm o users
    return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, users]);

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca per nome..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoExample;

// Differenze chiave e vantaggi rispetto a useEffect

import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    console.log('Eseguo il filtro');
    setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm, users]);

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca per nome..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Differenze chiave e vantaggi di useMemo

// Calcolo Sincrono vs Asincrono: useMemo esegue il calcolo e restituisce il risultato durante la stessa fase di render, 
// mentre useEffect esegue il suo codice dopo che il render è stato completato. 
// Questo potrebbe portare a un comportamento diverso in termini di tempismo e potrebbe essere rilevante in scenari 
// di ottimizzazione delle prestazioni.

// Numero di Render: Con useEffect, avrai bisogno di un ulteriore stato (filteredUsers) che, quando viene aggiornato, 
// causerà una nuova renderizzazione del componente. useMemo evita questo, restituendo direttamente il valore calcolato.