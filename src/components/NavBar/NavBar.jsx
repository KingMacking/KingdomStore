import React from "react";

import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

import kingdomLogo from '../../assets/logo-full.svg'
import "./NavBar.scss"

export const Navbar = () => {
    return (
        <header id="header">
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={kingdomLogo} alt="" /></Link>
                    <div className="navbar-buttons">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <iconify-icon inline icon="ic:round-monitor"></iconify-icon>
                                PC
                                </a>
                                <div className="dropdown-menu">
                                        <div className="dropdown-submenu">
                                            <h2 className="dropdown-title">
                                                <span>Plataformas</span>
                                                <Link className="title-span" to="/category/pc">Ver todos</Link>
                                            </h2>
                                            <div className="dropdown-items">
                                                <Link className="dropdown-item" to="/category/pc/steam"><iconify-icon inline icon="bi:steam"></iconify-icon>Steam</Link>
                                                <Link className="dropdown-item" to="/category/pc/origin"><iconify-icon inline icon="cib:origin"></iconify-icon>Origin</Link>
                                                <Link className="dropdown-item" to="/category/pc/epic-games"><iconify-icon inline icon="cib:epic-games"></iconify-icon>Epic games</Link>
                                                <Link className="dropdown-item" to="/category/pc/battle-net"><iconify-icon inline icon="fa-brands:battle-net"></iconify-icon>Battle.net</Link>
                                                <Link className="dropdown-item" to="/category/pc/gog"><iconify-icon inline icon="cib:gog-com"></iconify-icon>GOG</Link>
                                                <Link className="dropdown-item" to="/category/pc/ubisoft-connect"><iconify-icon inline icon="cib:ubisoft"></iconify-icon>Ubisoft</Link>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <iconify-icon inline icon="bi:playstation"></iconify-icon>
                                    Playstation
                                </a>
                                <div className="dropdown-menu">
                                        <div className="dropdown-submenu">
                                            <h2 className="dropdown-title">
                                                <span>Consolas</span>
                                                <Link className="title-span" to="/category/playstation">Ver todos</Link>
                                            </h2>
                                            <div className="dropdown-items">
                                                <Link className="dropdown-item" to="/category/playstation4"><iconify-icon inline icon="simple-icons:playstation4"></iconify-icon>Playstation 4</Link>
                                                <Link className="dropdown-item" to="/category/playstation5"><iconify-icon inline icon="simple-icons:playstation5"></iconify-icon>Playstation 5</Link>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <iconify-icon inline icon="bi:xbox"></iconify-icon>
                                    Xbox
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-submenu">
                                        <h2 className="dropdown-title">
                                            <span>Consolas</span>
                                            <Link className="title-span" to="/category/xbox">Ver todos</Link>
                                        </h2>
                                        <div className="dropdown-items">
                                            <Link className="dropdown-item" to="/category/xbox-one"><iconify-icon inline icon="bi:xbox"></iconify-icon>Xbox ONE</Link>
                                            <Link className="dropdown-item" to="/category/xbox-series-x"><iconify-icon inline icon="bi:xbox"></iconify-icon>Xbox series X|S</Link>
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
                                        <h2 className="dropdown-title">
                                            <span>Consolas</span>
                                            <Link className="title-span" to="/category/nintendo-switch">Ver todos</Link>
                                        </h2>
                                        <div className="dropdown-items">
                                            <Link className="dropdown-item" to="/category/nintendo-switch"><iconify-icon inline icon="bi:nintendo-switch"></iconify-icon>Switch</Link>
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