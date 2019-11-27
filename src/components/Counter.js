import React, { useState } from 'react';

const Counter = () => {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Le compteur commencera à :</p>
      <input type="number" onChange={(i) =>setCount(parseInt(i.target.value))}/>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;