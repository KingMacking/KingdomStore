import React from "react";
import { Link } from "react-router-dom";

import './Footer.scss'
import kingdomLogo from '../../assets/logo-full.svg'

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-nav">
                <div className="footer-section">
                    <Link className="footer-brand" to="/"><img src={kingdomLogo} alt="" /></Link>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Plataformas</h2>
                    <Link className="footer-item" to="/category/pc"><iconify-icon inline icon="ic:round-monitor"/>PC</Link>
                    <Link className="footer-item" to="/category/playstation"><iconify-icon inline icon="bi:xbox"/>Playstation</Link>
                    <Link className="footer-item" to="/category/xbox"><iconify-icon inline icon="bi:playstation"/>Xbox</Link>
                    <Link className="footer-item" to="/category/nintendo"><iconify-icon inline icon="bi:nintendo-switch"/>Nintendo</Link>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Navegación</h2>
                    <Link className="footer-item" to="/cart"><iconify-icon inline icon="eva:shopping-cart-fill"/>Carrito</Link>
                    <Link className="footer-item" to="/wishlist"><iconify-icon inline icon="bi:list-stars"/>Wishlist</Link>
                    <Link className="footer-item" to="/orderfinder"><iconify-icon inline icon="icon-park-outline:transaction-order"/>Buscar orden</Link>
                </div>
            </div>
        </footer>
    )
}