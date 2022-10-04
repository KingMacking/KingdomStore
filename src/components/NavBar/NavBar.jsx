import React from "react";
import { CartWidget } from "./CartWidget";
import "./NavBar.scss"
export const Navbar = () => {
    return (
        <header id="header">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <div className="navbar-buttons">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <iconify-icon inline icon="ic:round-monitor"></iconify-icon>
                                PC
                                </a>
                                <div className="dropdown-menu">
                                        <div className="dropdown-submenu">
                                            <h2 className="dropdown-title">Plataformas</h2>
                                            <div className="dropdown-items">
                                                <a className="dropdown-item" href="#"><iconify-icon inline icon="bi:steam"></iconify-icon>Steam</a>
                                                <a className="dropdown-item" href="#"><iconify-icon inline icon="cib:origin"></iconify-icon>Origin</a>
                                                <a className="dropdown-item" href="#"><iconify-icon inline icon="cib:epic-games"></iconify-icon>Epic games</a>
                                                <a className="dropdown-item" href="#"><iconify-icon inline icon="fa-brands:battle-net"></iconify-icon>Battle.net</a>
                                                <a className="dropdown-item" href="#"><iconify-icon inline icon="cib:gog-com"></iconify-icon>GOG</a>
                                                <a className="dropdown-item" href="#"><iconify-icon inline icon="cib:ubisoft"></iconify-icon>Ubisoft</a>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <iconify-icon inline icon="bi:playstation"></iconify-icon>
                                Playstation
                                </a>
                                <div className="dropdown-menu">
                                        <div className="dropdown-submenu">
                                            <h2 className="dropdown-title">Consolas</h2>
                                            <div className="dropdown-items">
                                                <a className="dropdown-item" href="#"><iconify-icon inline icon="simple-icons:playstation4"></iconify-icon>Playstation 4</a>
                                                <a className="dropdown-item" href="#"><iconify-icon inline icon="simple-icons:playstation5"></iconify-icon>Playstation 5</a>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <iconify-icon inline icon="bi:xbox"></iconify-icon>
                                Xbox
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-submenu">
                                        <h2 className="dropdown-title">Consolas</h2>
                                        <div className="dropdown-items">
                                            <a className="dropdown-item" href="#"><iconify-icon inline icon="bi:xbox"></iconify-icon>Xbox ONE</a>
                                            <a className="dropdown-item" href="#"><iconify-icon inline icon="bi:xbox"></iconify-icon>Xbox series X|S</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <iconify-icon inline icon="bi:nintendo-switch"></iconify-icon>
                                Nintendo
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-submenu">
                                        <h2 className="dropdown-title">Consolas</h2>
                                        <div className="dropdown-items">
                                            <a className="dropdown-item" href="#"><iconify-icon inline icon="bi:nintendo-switch"></iconify-icon>Switch</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    );
};