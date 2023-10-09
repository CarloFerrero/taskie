// useEffect():
// 1. useEffect è una funzione che accetta due argomenti:
// - il primo è una funzione che viene eseguita quando il componente viene renderizzato per la prima volta
// - il secondo è un array di dipendenze che indica a React quando eseguire la funzione passata come primo argomento

// 2. se il secondo argomento non viene passato la funzione viene eseguita ogni volta che il componente viene renderizzato
// 3. se il secondo argomento viene passato come array vuoto la funzione viene eseguita solo la prima volta che il componente viene renderizzato
// 4. se il secondo argomento viene passato come array con dei valori la funzione viene eseguita quando i valori passati cambiano
// ed anche la prima volta che il componente viene renderizzato.

// 5. useEffect può restituire una funzione che viene eseguita quando il componente viene dismesso, e la prima volta 
// che il componente viene renderizzato.
// 6. useEffect può essere chiamato solo all'interno di un componente essendo un hook, può essere chiamato 
// più volte all'interno di un componente.

import React, { useState, useEffect } from "react";


const ChildrenEffect = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [model, setModel] = useState(null);
    
    const fetchModel = async () => {
        const data  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const model = await data.json();
        return model;
    };

    useEffect(() => {
      const model = fetchModel();
      if(model) {
        setModel(model)
      }
    }, []);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>hide children</button>
            <p>ChildrenEffect</p>
        </div>
    );
}


const EffectExample = () => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        console.log("1")
    }, []);

    const handleHide = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={handleHide}>hide</button>
            {isVisible && <ChildrenEffect />}
        </div>
    );
};

export default EffectExample;


