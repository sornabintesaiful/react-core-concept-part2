import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div style={{border:'2px solid red',borderRadius:'20px',paddingBottom:'20px'}}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>add 1</button>
    </div>
  )
}