import React from "react";
import { Link } from "react-router-dom";

import './Footer.scss'

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-nav">
                <div className="footer-section">
                    <h2 className="footer-title">Plataformas</h2>
                    <Link className="footer-item" to="/category/pc"><iconify-icon inline icon="ic:round-monitor"/>PC</Link>
                    <Link className="footer-item" to="/category/playstation"><iconify-icon inline icon="bi:xbox"/>Playstation</Link>
                    <Link className="footer-item" to="/category/xbox"><iconify-icon inline icon="bi:playstation"/>Xbox</Link>
                    <Link className="footer-item" to="/category/nintendo"><iconify-icon inline icon="bi:nintendo-switch"/>Nintendo</Link>
                </div>
            </div>
        </footer>
    )
}