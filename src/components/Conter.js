import React, { useState } from 'react';

const Contador = () => {
  //Declara una nueva variable
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>agregar</button>
      <button onClick={() => setCount(count - 1)}>reducir</button>
    </div>
  );
};

export default Contador;
