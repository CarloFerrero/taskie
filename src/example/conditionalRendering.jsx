import React from 'react';

// Caso 1: Rendering condizionale utilizzando un if statement.
// Caso 2: Rendering condizionale passando props al componente Item.
// Caso 3: Rendering condizionale restituendo null.
// Caso 4: Rendering condizionale utilizzando l'operatore ternario ? :.
// Caso 5: Rendering condizionale utilizzando l'operatore logico &&.
// Caso 6: Rendering condizionale assegnando JSX a una variabile.

function Student({ name, isPresent }) {
  // Caso 1: Rendering condizionale con un if statement
  if (isPresent) {
    return <li className="item">{name} ✔</li>;
  } else {
    return <li className="item">{name}</li>;
  }
}

// Funzione di rendering condizionale con assegnazione a variabile
function renderStudent(name, isPresent) {
    let studentContent = name;
    if (isPresent) {
      studentContent = <strong>{name} ✔</strong>;
    }
    return (
      <li className="item">
        {studentContent}
      </li>
    );
  }

export default function SchoolAttendance() {
  const isPresent = true;
  return (
    <section>
      <h1>Appello scolastico</h1>
      <ul>
        {/* Caso 2: Rendering condizionale passando props */}
        <Student 
          isPresent={true} 
          name="Alice Johnson" 
        />
        <Student 
          isPresent={true} 
          name="Bob Smith" 
        />
        <Student 
          isPresent={false} 
          name="Charlie Brown" 
        />
      </ul>
      <h2>Altri modi per il rendering condizionale:</h2>
      {/* Caso 3: Rendering condizionale restituendo null */}
      <Student 
        isPresent={true} 
        name="David Davis" 
      />
      {/* Caso 4: Rendering condizionale con operatore ternario */}
      <li className="item">
        {isPresent ? "Eva Evans" : "Eva Evans (Assente)"}
      </li>
      {/* Caso 5: Rendering condizionale con operatore logico AND */}
      <li className="item">
        Frank Ford {isPresent && '✔'}
      </li>
      {/* Caso 6: Rendering condizionale assegnando JSX a una variabile */}
      {renderStudent("Grace Green", true)}
    </section>
  );
}

