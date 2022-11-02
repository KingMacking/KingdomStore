import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/Pages/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import { CartPage } from "./components/Pages/CartPage/CartPage";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';


import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { WishlistContextProvider } from "./context/WishlistContext";
import { WishlistPage } from "./components/Pages/WishlistPage/WishlistPage";

function App() {
    return (
        <CartContextProvider>
            <WishlistContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/category/:categoryId/:storeId" element={<ItemListContainer/>}/>
                        <Route path="/detail/:gameId" element={<ItemDetailContainer />}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/wishlist" element={<WishlistPage/>}/>
                        <Route path="*" element={<Navigate to='/404'/>}/>
                    </Routes>
                    <Footer />
                </BrowserRouter>
                <ToastContainer />
            </WishlistContextProvider>
        </CartContextProvider>
    );
}

export default App;
