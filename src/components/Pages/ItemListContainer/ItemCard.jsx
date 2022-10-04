import React from "react";
import "./ItemCard.scss"

export const ItemCard = (props) => {
    const getPlatform = (platform) => {
        return props.game.platforms.find((plat)=>{
            return plat.platform.slug === platform
        })
    }
    return (
        <div className="card">
            <img src={props.game.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="card-platforms">
                    <h2 className="card-title">{props.game.name}</h2>
                    <div className="card-platforms-icons">
                        {getPlatform("pc") && <iconify-icon inline icon="ic:round-monitor"></iconify-icon>}
                        {((getPlatform("playstation4")) || (getPlatform("playstation5"))) && <iconify-icon inline icon="bi:playstation"></iconify-icon>}
                        {((getPlatform("xbox-one")) || (getPlatform("xbox-series-x"))) && <iconify-icon inline icon="bi:xbox"></iconify-icon>}
                        {getPlatform("nintendo-switch") && <iconify-icon inline icon="bi:nintendo-switch"></iconify-icon>}
                    </div>
                </div>
                <div className="card-information">
                    {(props.game.sale > 0) ?
                        <>
                            <div>
                                <span className="card-price in-sale">${props.game.price}</span>
                                <span className="card-sale-price">${(props.game.price)-((props.game.price)*(props.game.sale))/100}</span>
                            </div>
                            <span className="card-discount">{props.game.sale}%</span>
                        </>
                        :
                        <div>
                                <span className="card-price">${props.game.price}</span>
                        </div>
                    }
                    
                </div>
                <button className="btn card-btn">Añadir al carrito</button>
            </div>
        </div>
    )
}