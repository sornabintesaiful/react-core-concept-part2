import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  
  function HandleClick() {
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('btn 2 clicked')
  }
  const addToFive = (num) => {
    alert(num + 5)
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>React Core Concept part 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={HandleClick}>click me</button>
      <button onClick={handleClick2}>click me 2</button>
      <button
        onClick={() => {
          alert('third clicked');
        }}
      >
        click me 3
      </button>
      <button onClick={()=> addToFive(4)}>four</button>
    </>
  );
}

export default App
