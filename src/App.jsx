import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navbar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer/>
    </>
  )
}

export default App
