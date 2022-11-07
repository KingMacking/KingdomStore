import React from "react";
import { Link } from "react-router-dom";

import './NotFound.scss'
export const NotFound = () => {
	return (
	<div className="notfound-container">
		<h2 className="notfound-title">Error 404 (No encontrado)</h2>
		<p className="notfound-text">Por favor selecciona a donde quieres navegar</p>
		<div className="notfound-btn-group">
			<Link to="/"><button className="btn">Inicio</button></Link>
			<Link to="/cart"><button className="btn">Carrito</button></Link>
			<Link to="/wishlist"><button className="btn">Wishlist</button></Link>
			<Link to="/orderfinder"><button className="btn">Buscador de orden</button></Link>
		</div>
	</div>
	)
};
