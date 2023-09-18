import React, { useState } from 'react';

// Caso 1: Gestione di eventi su un elemento HTML.
// Caso 2: Gestione di eventi su un input controllato.
// Caso 3: Gestione di eventi su un componente personalizzato.
// Caso 4: Gestione di eventi con parametri aggiuntivi.

// Caso 1: Gestione di eventi su un elemento HTML.
function ButtonClickExample() {
    const handleClick = () => {
        alert('Il pulsante è stato cliccato!');
    };

    return (
        <div>
            <h1>Gestione degli eventi in React</h1>
            <button onClick={handleClick}>Clicca qui</button>
        </div>
    );
}

// Caso 2: Gestione di eventi su un input controllato.
function InputChangeExample() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <h3>Gestione di input controllati</h3>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Inserisci qualcosa"
            />
            <p>Valore dell'input: {inputValue}</p>
        </div>
    );
}

// Caso 3: Gestione di eventi su un componente personalizzato.
function CustomComponentExample() {
    const handleCustomEvent = () => {
        alert('Evento personalizzato è stato scatenato!');
    };

    return (
        <div>
            <h3>Gestione di eventi su un componente personalizzato</h3>
            <CustomButton onClick={handleCustomEvent} />
        </div>
    );
}

function CustomButton({ onClick }) {
    return <button onClick={onClick}>Scatena Evento</button>;
}

// Caso 4: Gestione di eventi con parametri aggiuntivi.
function EventWithParametersExample() {
    const handleEventWithParams = (param) => {
        alert(`Hai cliccato con il parametro: ${param}`);
    };

    return (
        <div>
            <h3>Gestione di eventi con parametri aggiuntivi</h3>
            <button onClick={() => handleEventWithParams('Questo è un parametro')}>
                Esegui evento con parametro
            </button>
        </div>
    );
}

// Caso 5: Gestione degli eventi nei cicli di rendering multipli.
function UserList({ users }) {
    const handleUserClick = (userId) => {
        console.log(`Hai cliccato sull'utente con id: ${userId}`);
    };

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id} onClick={() => handleUserClick(user.id)}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
}

// Caso 6: Gestione degli eventi asincroni.
function AsyncEventExample() {
  const [data, setData] = useState(null);

  const handleAsyncEvent = async () => {
    try {
      // Effettua una chiamata API asincrona
      const response = await fetch('https://api.example.com/data');
      
      // Controlla se la chiamata ha avuto successo
      if (!response.ok) {
        throw new Error('Errore nella chiamata API');
      }

      // Estrai i dati dalla risposta
      const responseData = await response.json();

      // Aggiorna lo stato del componente con i dati ricevuti
      setData(responseData);
    } catch (error) {
      // Gestisci gli errori, ad esempio mostrando un messaggio di errore all'utente
      console.error('Si è verificato un errore:', error);
    }
  };

  return (
    <div>
      <h3>Gestione di eventi asincroni</h3>
      <button onClick={handleAsyncEvent}>Carica dati asincroni</button>
      {data ? (
        <div>
          <h3>Dati caricati con successo:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Fai clic sul pulsante per caricare i dati.</p>
      )}
    </div>
  );
}


// Caso 7: Gestione degli eventiglobali 
// import { useDispatch } from 'react-redux';
function GlobalEvent() {
  // const dispatch = useDispatch();

  const handleGlobalEvent = () => {
    // Esegui un'azione globale tramite Redux
    // dispatch({ type: 'GLOBAL_ACTION' });
  };

  return (
    <div>
      <button onClick={handleGlobalEvent}>Evento Globale</button>
    </div>
  );
}



export default function EventHandling() {
    return (
        <div style={{display: 'flex', flexDirection:'column', gap:'20px'}}>
            <ButtonClickExample />
            <InputChangeExample />
            <CustomComponentExample />
            <EventWithParametersExample />
            <UserList
                users={[
                    { id: 1, name: 'Alice' },
                    { id: 2, name: 'Bob' },
                    { id: 3, name: 'Charlie' },
                ]}
            />
            <GlobalEvent />
            <AsyncEventExample />
        </div>
    );
}
