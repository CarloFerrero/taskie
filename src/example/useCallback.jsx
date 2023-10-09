// useCallback:
// 1. useCallback è un hook che restituisce una funzione memoizzata.
// Una funzione memoizzata è una funzione che ricorda il valore restituito per un determinato set di argomenti.
// 2. È utile quando si passano callback a componenti ottimizzati che si basano su confronti di uguaglianza riferimento.
// 3. Accetta una funzione inline e un array di dipendenze.

import React, { useState, useCallback } from 'react';

const ListItem = React.memo(({ item, onRemove }) => {
  console.log(`Rendering ListItem ${item}`);
  return (
    <div>
      {item} <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  );
});

const UseCallbackExample = () => {
  const [list, setList] = useState(['Apple', 'Banana', 'Orange']);

  const handleRemove = useCallback(
    (itemToRemove) => {
      setList((prevList) => prevList.filter((item) => item !== itemToRemove));
    },
    [] // dipendenze
  );

  return (
    <div>
      {list.map((item) => (
        <ListItem key={item} item={item} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default UseCallbackExample;
