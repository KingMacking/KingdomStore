import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/Pages/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/Pages/ItemDetailContainer/ItemDetailContainer";

import "./App.css";

function App() {
    return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId/:storeId" element={<ItemListContainer/>}/>
                    <Route path="/detail/:gameId" element={<ItemDetailContainer />}/>
                    <Route path="*" element={<Navigate to='/404'/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
