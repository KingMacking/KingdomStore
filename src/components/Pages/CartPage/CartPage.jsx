import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import { CartItem } from "./CartItem";

import './CartPage.scss'
import { OrderForm } from "./OrderForm";

export const CartPage = () => {
    const {cartList, emptyCart, removeItem, cartTotalPrice, cartQuant} = useCartContext()
    return (
        <div className="cart-container">
            <h2 className="cart-title">Carrito</h2>
            <div className="cart-detail">
                <div className="cart-items">
                    {cartList.length > 0 ? 
                            cartList.map((product, index) => <CartItem key={index} product={product} handleRemoveItem={() => removeItem(index)}/>)
                        : 
                        <>
                            <h3>El carrito esta vacio</h3>
                            <Link to="/" className="btn">Volver a inicio</Link>
                        </>
                    }
                    <button className="btn" onClick={emptyCart}>Vaciar carrito</button>
                </div>
                <div className="cart-info">
                    <h3 className="cart-info-title">Subtotal</h3>
                    <div className="cart-info-detail">
                        <p className="cart-info-data">Cantidad: {cartQuant} Items</p>
                        {
                            <>
                                <p className="cart-info-data">Sumatoria: ${cartTotalPrice}</p>
                                {cartQuant >= 15 && <p className="cart-info-offer">Oferta por cantidad: 10% (15+)</p> || cartQuant >= 10 && <p className="cart-info-offer">Oferta por cantidad: 5% (10+)</p>}
                                {cartQuant >= 15 && <h4 className="cart-info-total">Total: ${cartTotalPrice - (cartTotalPrice*0.1)}</h4> || cartQuant >= 10 && <h4 className="cart-info-total">Total: ${cartTotalPrice - (cartTotalPrice*0.05)}</h4> || <h4 className="cart-info-total">Total: ${cartTotalPrice}</h4>}
                            </>
                        }
                    </div>
                </div>
            </div>
            <OrderForm cartList={cartList} emptyCart={emptyCart} cartTotalPrice={cartTotalPrice} cartQuant={cartQuant}/>
        </div>
    )
}