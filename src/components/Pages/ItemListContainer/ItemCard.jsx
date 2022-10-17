import React from "react";
import "./ItemCard.scss"

export const ItemCard = ({game}) => {
    const getPlatform = (platform) => {
        return game.platforms.find((plat)=>{
            return plat.platform.slug.includes(platform)
        })
    }
    return (
        <div className="card">
            <img src={game.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="card-platforms">
                    <h2 className="card-title">{game.name}</h2>
                    <div className="card-platforms-icons">
                        {getPlatform("pc") && <iconify-icon inline icon="ic:round-monitor"></iconify-icon>}
                        {getPlatform("playstation") && <iconify-icon inline icon="bi:playstation"></iconify-icon>}
                        {getPlatform("xbox") && <iconify-icon inline icon="bi:xbox"></iconify-icon>}
                        {getPlatform("nintendo-switch") && <iconify-icon inline icon="bi:nintendo-switch"></iconify-icon>}
                    </div>
                </div>
                <div className="card-information">
                    {(game.sale > 0) ?
                        <>
                            <div>
                                <span className="card-price in-sale">${game.price}</span>
                                <span className="card-sale-price">${(game.price)-((game.price)*(game.sale))/100}</span>
                            </div>
                            <span className="card-discount">{game.sale}%</span>
                        </>
                        :
                        <div>
                                <span className="card-price">${game.price}</span>
                        </div>
                    }
                    
                </div>
                <button className="btn card-btn">Añadir al carrito</button>
            </div>
        </div>
    )
}