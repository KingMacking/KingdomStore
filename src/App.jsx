import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ItemListContainer/>
    </>
  )
}

export default App
