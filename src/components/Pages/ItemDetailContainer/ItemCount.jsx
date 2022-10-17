import { useState } from "react"

import './ItemCount.scss'

export const ItemCount = ({stock, init, addToCart}) => {
    const [count, setCount] = useState(init);

    const handleAdd = () => {
        count < stock && setCount(count + 1)
    }

    const handleRemove = () => {
        count > init && setCount(count - 1)
    }

    const handleAddToCart = () => {
        addToCart(count)
    }

    return (
        <>
            <div className="item-count">
                <h2 className="item-count-title">Cantidad</h2>
                <div className="item-count-selector">
                    <span className="item-count-value">{count}</span>
                    <div className="item-count-btns">
                        {(count === 1) ? 
                            <>
                                <button className="btn btn-count" onClick={() => handleAdd()}>+</button>
                                <button className="btn btn-count disabled" onClick={() => handleRemove()}>-</button>
                            </>
                            : (count === stock) ?
                            <>
                                <button className="btn btn-count disabled" onClick={() => handleAdd()}>+</button>
                                <button className="btn btn-count" onClick={() => handleRemove()}>-</button>
                            </>
                            :
                            <>
                                <button className="btn btn-count" onClick={() => handleAdd()}>+</button>
                                <button className="btn btn-count" onClick={() => handleRemove()}>-</button>
                            </>
                        }
                    </div>
                </div>
            </div>
            <button className="btn item-btn" onClick={handleAddToCart}>Añadir al carrito</button>
        </>
    )
}