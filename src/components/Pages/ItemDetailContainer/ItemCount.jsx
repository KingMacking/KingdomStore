import { useState } from "react"
import { toast } from "react-toastify";

import './ItemCount.scss'

export const ItemCount = ({stock, init, addToCart, platform, store, addToWishlist}) => {
    const [count, setCount] = useState(init);

    const handleAdd = () => {
        count < stock && setCount(count + 1)
    }

    const handleRemove = () => {
        count > init && setCount(count - 1)
    }

    const handleAddToCart = () => {
        addToCart(count)
        toast.success('Producto agregado al carrito', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        })
    }

    const handleAddToWishlist = () => {
        addToWishlist(count)
        toast.success('Producto agregado a la wishlist', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        })
    }

    return (
        <>
            <div className="item-count">
                <h2 className="item-count-title">Cantidad</h2>
                <div className="item-count-selector">
                    <span className="item-count-value">{count}</span>
                    <div className="item-count-btns">
                        {
                            <>
                                <button className={"btn btn-count "+ (count === stock && "disabled")} onClick={() => handleAdd()}>+</button>
                                <button className={"btn btn-count "+(count === 1 && "disabled")} onClick={() => handleRemove()}>-</button>
                            </>
                        }
                    </div>
                </div>
            </div>
            <button className={(platform && platform !== "pc" || (platform && (platform === "pc" && store))) ? "btn item-btn" : "btn item-btn disabled"} onClick={handleAddToCart}>Añadir al carrito</button>
            <button className={(platform && platform !== "pc" || (platform && (platform === "pc" && store))) ? "btn item-btn" : "btn item-btn disabled"} onClick={handleAddToWishlist}>Añadir a la wishlist</button>
        </>
    )
}