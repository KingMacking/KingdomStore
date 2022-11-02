import { toast } from 'react-toastify'
import './WishlistItem.scss'

export const WishlistItem = ({product, handleRemoveItem, handleAddToCartItem}) => {
    const handleRemove = (index) => {
        handleRemoveItem(index)
        toast.success('Item eliminado correctamente', {
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

    const handleAddToCart = (product) => {
        handleAddToCartItem(product)
        handleRemoveItem(product)
        toast.success('Producto agregado al carrito', {
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

    const platform = product.platform
    const store = product.store
    const getPlatform = (platform) => {
        switch (platform){
            case 'pc' :
                return (<span><iconify-icon inline icon="ic:round-monitor"></iconify-icon>PC</span>)
                
            case 'playstation5' :
                return (<span><iconify-icon inline icon="simple-icons:playstation5"></iconify-icon>Playstation 5</span>)
                
            case 'playstation4' :
                return (<span><iconify-icon inline icon="simple-icons:playstation4"></iconify-icon>Playstation 4</span>)
                
            case 'xbox-one' :
                return (<span><iconify-icon inline icon="bi:xbox"></iconify-icon>Xbox One</span>)
                
            case 'xbox360' :
                return (<span><iconify-icon inline icon="bi:xbox"></iconify-icon>Xbox 360</span>)
                
            case 'xbox-series-x' :
                return (<span><iconify-icon inline icon="bi:xbox"></iconify-icon>Xbox Series X/S</span>)
                
            case 'nintendo-switch' :
                return (<span><iconify-icon inline icon="bi:nintendo-switch"></iconify-icon>Nintendo switch</span>)
                
            default :
                'No existe la plataforma'
        }
    }

    const getStore = (store) => {
        switch (store){
            case 'steam' :
                return (<span><iconify-icon inline icon="bi:steam"></iconify-icon>Steam</span>)
                
            case 'epic-games' :
                return (<span><iconify-icon inline icon="cib:epic-games"></iconify-icon>Epic Games</span>)
                
            case 'gog' :
                return (<span><iconify-icon inline icon="cib:gog-com"></iconify-icon>GOG</span>)
                
            case 'origin' :
                return (<span><iconify-icon inline icon="cib:origin"></iconify-icon>Origin</span>)
                
            case 'battle-net' :
                return (<span><iconify-icon inline icon="fa-brands:battle-net"></iconify-icon>Battle.net</span>)
                
            case 'ubisoft-connect' :
                return (<span><iconify-icon inline icon="cib:ubisoft"></iconify-icon>Ubisoft connect</span>)
            default :
                ''
        }
    }
    return (
        <div className="wishlist-item">
            <div className='wishlist-item-detail'>
                <div className="wishlist-item-img">
                    <img src={product.img} alt="" />
                </div>
                <div className="wishlist-item-info">
                    <h3 className='wishlist-item-title'>{product.name}</h3>
                    <div>
                    <span className='wishlist-item-data platform'>{getPlatform(platform)}</span>
                    {product.store !== "" && <span className='wishlist-item-data platform'>{getStore(store)}</span>}
                    </div>
                    <span className='wishlist-item-data'>Cantidad: {product.quant}</span>
                    <span className='wishlist-item-price'>Precio: {(product.price)-(product.price)*(product.sale)/100}</span>
                </div>
            </div>
            <div className='wishlist-item-btns'>
                <button className='btn' onClick={(index)=>handleRemove(index)}><iconify-icon inline icon="bi:trash-fill"></iconify-icon></button>
                <button className='btn' onClick={(product)=>handleAddToCart(product)}><iconify-icon inline icon="eva:shopping-cart-fill"></iconify-icon></button>
            </div>
        </div>
    )
}