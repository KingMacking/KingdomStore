import { useState } from "react";
import { useCartContext } from "../../../context/cartContext";
import { ItemCount } from "./ItemCount";
import { PlatformSelection } from "./PlatformSelection";
import { StoreSelection } from "./StoreSelection";

import './ItemDetail.scss'

export const ItemDetail = ({game}) =>{
    const {addItem} = useCartContext()
    const [platform, setPlatform] = useState("")
    const [store, setStore] = useState("")
    
    const addToCart = (quant) => {
        addItem({...game, quant, platform, store})
    }

    return (
        <div className="item-detail">
            <div className="item-detail-info">
                <img className="item-detail-img" src={game.img} alt="..." />
                <h2 className="item-detail-name">{game.name}</h2>
                <div className="item-detail-price">
                    {(game.sale > 0) ?
                        <>
                            <div>
                                <span className="item-price in-sale">${game.price}</span>
                                <span className="item-sale-price">${(game.price)-((game.price)*(game.sale))/100}</span>
                            </div>
                            <span className="item-discount">{game.sale}%</span>
                        </>
                        :
                        <div>
                                <span className="item-price">${game.price}</span>
                        </div>
                    }
                </div>
            </div>
            <div className="item-detail-buy">
                <PlatformSelection game={game} handlePlatformSelection={setPlatform}/>
                <StoreSelection game={game} platform={platform} handleStoreSelection={setStore}/>
                <ItemCount addToCart={addToCart} stock={game.stock} init={1}/>
            </div>
        </div>
    )
}