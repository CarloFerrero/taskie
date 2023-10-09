// HOOKS:
// gli hook sono funzioni che permettono di aggiungere funzionalità a componenti funzionali
// per esempio useState è un hook che permette di aggiungere uno stato a un componente funzionale
// gli hook sono funzioni che iniziano con la parola use, per esempio useState, useEffect, ecc...
// gli hook possono essere usati solo in componenti funzionali e devono essere usati solo al primo livello del componente
// non possono essere usati dentro condizioni, cicli, ecc...

// useState:
// 1. useState è una funzione che restituisce un array di due elementi es:
// const [count, setCount] = useState(0);
// il primo elemento è lo stato, il secondo è una funzione che permette di modificare lo stato

// 2. useState accetta un argomento che è il valore di default dello stato:
// const [count, setCount] = useState(0); 
// dove 0 è il valore di default dello stato

// 3. la funzione che modifica lo stato accetta un argomento che è il nuovo valore dello stato
// per esempio: setCount(1) imposta il nuovo valore dello stato a 1

// 4. la funzione che modifica lo stato può essere chiamata con un argomento che è una funzione 
// che accetta lo stato precedente e restituisce il nuovo stato per esempio: setState((prevState) => prevState + 1)

// 5. ogni volta che viene aggiornato lo stato il componente viene renderizzato di nuovo, per questo motivo
// a volte è meglio passare come valore di default una funzione che restituisce il valore di default, altrimenti
// se il calcolo del valore iniziale è pesante il componente verrà renderizzato ogni volta e questo può causare
// problemi di performance, per risolverlo basta passare come valore di default una funzione che restituisce il valore
// in questo modo il valore verrà calcolato solo la prima volta che il componente viene renderizzato
// ES: const [count, setCount] = useState(() => calculateInitialCount()).
// ES: const [count, setCount] = useState(calculateInitialCount()).


// Ogni volta che chiami il setState(), lo stato viene sovrascritto con il nuovo valore, non viene aggiunto (merge): per esempio

// const [user, setUser] = useState({ name: "Mario", surname: "Rossi" });
// setUser({ age: 25 }) // user = { age: 25 }
// setUser({ surname: "Bianchi" }) // user = { surname: "Bianchi" }
// se vogliamo aggiungere un nuovo valore allo stato dobbiamo usare lo spread operator
// setUser({ ...user, age: 25 }) // user = { name: "Mario", surname: "Rossi", age: 25 }
// se vogliamo modificare un valore dello stato dobbiamo usare lo spread operator
// setUser({ ...user, surname: "Bianchi" }) // user = { name: "Mario", surname: "Bianchi" }

// di solito si crea uno useState() per ogni valore dello stato, per esempio:
// const [name, setName] = useState("Mario")
// const [surname, setSurname] = useState("Rossi")
// const [age, setAge] = useState(25)


import React, { useState } from 'react';


const ExampleUseState = () => {
    function calculateInitialValue() {
        console.log("calculateInitialValue")
        return 0
    }
    const [count, setCount] = useState(calculateInitialValue());  
    const [user, setUser] = useState({ name: "Mario", surname: "Rossi" });

    // cannot be used inside a condition
    // if(condition){
    //     useState(0)
    // }

    const handleClick = () => {
        setUser({ ...user, eta: "20" })
    }

    console.log(user)

    // update the state based on the previous state
    // const handleClick = () => {
    //     setCount((prevState) => prevState + 1)
    // }
    
    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Increment</button>
        </div>
    )
};

export default ExampleUseState;