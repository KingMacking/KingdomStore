import React from "react";
import { Link } from "react-router-dom";
export const CartWidget = () => {
    return (
        <Link to="/cart" className="cart-widget">
            <iconify-icon inline icon="eva:shopping-cart-fill"></iconify-icon>
        </Link>
    )
}