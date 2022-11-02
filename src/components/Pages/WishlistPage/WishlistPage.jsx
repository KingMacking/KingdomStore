import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCartContext } from "../../../context/CartContext";
import { useWishlistContext } from "../../../context/WishlistContext";
import { WishlistItem } from "./WishlistItem";

import './WishlistPage.scss'

export const WishlistPage = () => {
    const {wishlist, emptyWishlist, removeItemWl} = useWishlistContext()
    const {addItem, setCartList, cartList} = useCartContext()

    const handleEmptyWishlist = () => {
        emptyWishlist()
        toast.success('Wishlist vaciada correctamente', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
        })
    }

    const handleAddAllToCart = () => {
        wishlist.forEach((game) => {
            addItem(game)
        })
        emptyWishlist()
        toast.success('Wishlist añadida al carrito', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
        })
    }

    return (
        <>
            <div className="wishlist-container">
                <h2 className="wishlist-title">Wishlist</h2>
                <div className="wishlist-detail">
                    <div className="wishlist-items">
                        {wishlist.length > 0 ? 
                            <>
                                {wishlist.map((product, index) => <WishlistItem key={index} product={product} handleAddToCartItem={() => addItem(product)} handleRemoveItem={() => removeItemWl(index)}/>)}
                                <button className="btn btn-empty-wishlist" onClick={handleEmptyWishlist}>Vaciar wishlist</button>
                                <button className="btn btn-empty-wishlist" onClick={handleAddAllToCart}>Añador todo al carrito</button>
                            </>
                                : 
                            <>
                                <p className="wishlist-text">La wishlist esta vacia</p>
                                <Link to="/" className="btn">Volver a inicio</Link>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}