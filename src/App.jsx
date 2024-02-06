import { useState } from 'react'
import './App.css'
import BaristaForm from './Components/BaristaForm'

function App() {
  

  return (
    <div>
      <div className="title-container">
        <img className="omg-logo" src="\src\assets\omg-logo.79cdfddd.png"  alt="OMG Logo" ></img>
        <h1 className="title">On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App
