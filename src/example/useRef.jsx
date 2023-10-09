// useRef():
// 1. useRef è un hook che permette di creare un oggetto di riferimento 'mutable'
// che può essere utilizzato per archiviare riferimenti a elementi DOM o per
// mantenere dati persistenti tra renderizzazioni di componenti.

// 2. useRef restituisce un oggetto con una proprietà "current" che può essere
// utilizzata per leggere o scrivere dati. L'oggetto di riferimento non cambierà
// tra le renderizzazioni del componente.

// 3. Comunemente, useRef viene utilizzato per ottenere riferimenti a elementi
// del DOM in modo sicuro, ad esempio input o div.

// 4. È importante notare che la modifica di "current" di un oggetto di riferimento
// non provocherà la ri-renderizzazione del componente.

// Example 1: useRef() to store a reference to an input element
// import { useRef } from "react";

// const RefExample = () => {
//     // Creare un oggetto di riferimento
//     const myRef = useRef(null);

//     const handleButtonClick = () => {
//         // Utilizzare il riferimento per accedere all'elemento DOM
//         if (myRef.current) {
//             myRef.current.focus();
//         }
//     };

//     return (
//         <div>
//             <input type="text" ref={myRef} />
//             <button onClick={handleButtonClick}>Focus input</button>
//         </div>
//     );
// };

// export default RefExample;


// Example 2: useRef() to store a reference to a value

// import { useRef, useState } from "react";

// const RefDataExample = () => {
//     // Creare un oggetto di riferimento per archiviare dati
//     const dataRef = useRef(null);

//     // Stato per visualizzare i dati
//     const [data, setData] = useState("");

//     const handleInputChange = (e) => {
//         console.log('input change')
//         // Aggiornare l'oggetto di riferimento con i dati immessi dall'utente
//         dataRef.current = e.target.value;
//     };

//     const handleSaveData = () => {
//         console.log('save data')
//         // Utilizzare i dati archiviati nell'oggetto di riferimento
//         if (dataRef.current) {
//             setData(`Dati archiviati: ${dataRef.current}`);
//         } else {
//             setData("Nessun dato archiviato.");
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Inserisci dati"
//                 onChange={handleInputChange}
//             />
//             <button onClick={handleSaveData}>Salva Dati</button>
//             <div>
//                 <p>{data}</p>
//             </div>
//         </div>
//     );
// };

// export default RefDataExample;

// Example 3: difference with use state
import { useState } from "react";
import { validateEmail, validateName } from "../utils/validateFunction";

const RefDataExample = () => {
    // Stato per immagazzinare i dati immessi dall'utente
    const [data, setData] = useState("");
    const [emailError, setEmailError] = useState("");


    const handleInputChange = (e) => {
        const isValid = validateEmail(e.target.value);
        if(isValid) {
            setData(e.target.value);
        } else {
            setEmailError("Email non valida")
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Inserisci dati"
                onChange={handleInputChange}
            />
            <div>
                <p>{data ? `Dati immessi: ${data}` : "Nessun dato immesso."}</p>
                <p>{emailError ? emailError : null}</p>
            </div>
        </div>
    );
};

export default RefDataExample;



