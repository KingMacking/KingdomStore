import { useCartContext } from "../../../context/cartContext";

export const CartPage = () => {
    const {cartList, emptyCart} = useCartContext()
    console.log(cartList)
    return (
        <div>
            <h1>Carrito</h1>
            <ul>
            {cartList.map(product => <li>nombre: {product.name} plataforma: {product.platform} precio: {product.price} cantidad: {product.quant}</li>)}
            </ul>
            <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
    )
}