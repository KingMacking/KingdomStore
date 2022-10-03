import React from "react";
import "./sass/partials/Cards.scss"

export const ItemCard = (props) => {
    return (
        <div className="card" key={props.id}>
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="card-platforms">
                    <h2 className="card-title">{props.name}</h2>
                    <div className="card-platforms-icons">
                        <iconify-icon inline icon="ic:round-monitor"></iconify-icon>
                        <iconify-icon inline icon="bi:playstation"></iconify-icon>
                        <iconify-icon inline icon="bi:xbox"></iconify-icon>
                    </div>
                </div>
                <div className="card-information">
                    <div>
                        <span className="card-price">${props.price}</span>
                        <span className="card-sale-price">$45</span>
                    </div>
                    <span className="card-discount">10%</span>
                </div>
                <button className="btn card-btn">Añadir al carrito</button>
            </div>
        </div>
    )
}