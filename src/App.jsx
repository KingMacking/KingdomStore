import React from 'react';
import { Navbar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/Pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    {/* <ItemListContainer/> */}
    <ItemDetailContainer/>
    </>
  )
}

export default App
