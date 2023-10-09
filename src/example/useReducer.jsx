// useReducer:
// 1. useReducer è un hook di React che è utilizzato per la gestione dello stato in componenti funzionali.
// È particolarmente utile quando lo stato da gestire è complesso o quando il prossimo stato dipende dal precedente.
// 2. useReducer accetta una funzione riduttrice e uno stato iniziale come argomenti e restituisce uno stato corrente e un metodo dispatch.
// 3. La funzione riduttrice prende lo stato corrente e un'azione come argomenti e restituisce un nuovo stato.

// Example:
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
};

export default UseReducerExample;

// Differenze con Redux: 

// Redux: È progettato per gestire lo stato globale dell'applicazione. 
// È utile quando hai bisogno di condividere lo stato tra componenti 
// che sono molto distanti tra loro nell'albero dei componenti.

// useReducer: È più adatto per la gestione dello stato a livello di componente 
// o di un piccolo sottoinsieme di componenti. Non è pensato per gestire lo stato globale dell'applicazione.