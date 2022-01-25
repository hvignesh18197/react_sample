import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(100);
  const [name, setName] = useState("Viki");

  useEffect(() => {
    console.log(count)
    document.title = `You clicked ${count} times`;
  },[count]);

  return (
    <div>
      <p>
        {name} clicked {count} times
      </p>
      <button onClick={() => setName('Healthwin')}>Click name</button>
      <button onClick={() => setCount(count+1)}>Click Count</button>
    </div>
  );
}
