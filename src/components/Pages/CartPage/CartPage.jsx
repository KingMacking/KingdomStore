import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import { CartItem } from "./CartItem";
import { Checkout } from "./Checkout";
import { OrderForm } from "./OrderForm";

import './CartPage.scss'

export const CartPage = () => {
    const {cartList, emptyCart, removeItem, cartTotalPrice, cartQuant} = useCartContext()
    const [orderId, setOrderId] = useState('')

    return (
        <>
            <div className="cart-container">
                <h2 className="cart-title">Carrito</h2>
                <div className="cart-detail">
                    <div className="cart-items">
                        {cartList.length > 0 ? 
                            <>
                                {cartList.map((product, index) => <CartItem key={index} product={product} handleRemoveItem={() => removeItem(index)}/>)}
                                <button className="btn btn-empty-cart" onClick={emptyCart}>Vaciar carrito</button>
                            </>
                                : 
                            <>
                                <p className="cart-text">El carrito esta vacio</p>
                                <Link to="/" className="btn">Volver a inicio</Link>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
            {orderId ?
                <Checkout orderId={orderId}/>
                :
                cartList.length > 0 &&
                    <div className="form-container">
                        <OrderForm cartList={cartList} emptyCart={emptyCart} cartTotalPrice={cartTotalPrice} cartQuant={cartQuant} handleOrderId={setOrderId}/>
                    </div>
            }
        </>
    )
}