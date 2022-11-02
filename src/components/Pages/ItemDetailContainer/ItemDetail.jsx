import { useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import { useWishlistContext } from "../../../context/WishlistContext";
import { ItemCount } from "./ItemCount";
import { PlatformSelection } from "./PlatformSelection";
import { StoreSelection } from "./StoreSelection";
import { Link } from "react-router-dom";
import './ItemDetail.scss'

export const ItemDetail = ({game}) =>{
    const {addItem} = useCartContext()
    const {addItemWl} = useWishlistContext()
    const [platform, setPlatform] = useState("")
    const [store, setStore] = useState("")
    const [isCount ,setIsCount] = useState(true)
    
    
    const addToCart = (quant) => {
        let item = {...game, quant, platform, store}
        addItem(item)
        setIsCount('cart')
    }

    const addToWishlist = (quant) => {
        let item = {...game, quant, platform, store}
        addItemWl(item)
        setIsCount('wishlist')
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
                {
                    isCount === true ?
                        <>
                            <PlatformSelection game={game} handlePlatformSelection={setPlatform}/>
                            <StoreSelection game={game} platform={platform} handleStoreSelection={setStore}/>
                            <ItemCount platform={platform} store={store} addToCart={addToCart} stock={game.stock} addToWishlist={addToWishlist} init={1}/>
                        </>
                    :
                    <div className="item-detail-btn-group">
                        <Link to={isCount === 'cart' && "/cart" || isCount === 'wishlist' && "/wishlist"}>
                            <button className="btn item-btn">{isCount === 'cart' && "Terminar compra" || isCount === 'wishlist' && "Ir a la wishlist"}</button>
                        </Link>
                        <Link to="/">
                            <button className="btn item-btn">Ir a inicio</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}