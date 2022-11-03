import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import './CartWidget.scss'

export const CartWidget = () => {
    const {cartQuant} = useCartContext()
    return (
        <Link to="/cart" className="cart-widget">
            <div className="cart-icon">
                <iconify-icon inline icon="eva:shopping-cart-fill"/>
                {cartQuant > 0 && <span className="cart-counter">{cartQuant}</span>}
            </div>
        </Link>
    )
}