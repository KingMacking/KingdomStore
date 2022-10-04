import React from "react";
import './ItemDetail.scss'

export const ItemDetail = (props) =>{
    return (
        <div className="item-detail">
            <div className="item-detail-info">
                <img className="item-detail-img" src={props.game.img} alt="..." />
                <h2 className="item-detail-name">{props.game.name}</h2>
                <div className="item-detail-price">
                    {(props.game.sale > 0) ?
                        <>
                            <div>
                                <span className="item-price in-sale">${props.game.price}</span>
                                <span className="item-sale-price">${(props.game.price)-((props.game.price)*(props.game.sale))/100}</span>
                            </div>
                            <span className="item-discount">{props.game.sale}%</span>
                        </>
                        :
                        <div>
                                <span className="item-price">${props.game.price}</span>
                        </div>
                    }
                </div>
            </div>
            <div className="item-detail-buy">
                <button className="btn item-btn">Añadir al carrito</button>
                <button className="btn item-btn-buy">Comprar ahora</button>
            </div>
        </div>
    )
}