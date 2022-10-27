import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { useState } from 'react'

export const OrderForm = ({cartList, emptyCart, cartTotalPrice, cartQuant}) => {
    const[dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleInputChange = (e) => {        
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const db = getFirestore()
    const orders = collection(db, 'orders')
    const queryCollection = collection(db, 'items')

    const generateOrder = async (e) => {
        e.preventDefault()
        const order = {}

        order.buyer = {
            name: dataForm.name,
            phone: dataForm.phone,
            email: dataForm.email
        }

        order.items = cartList.map(prod => {
            let price = prod.price - (prod.price * prod.sale / 100)
            const {id, name, quant, platform, store} = prod
            return {id, name, quant, platform, store, price}
        })

        order.total = cartTotalPrice

        order.date = new Date().toLocaleDateString()

        addDoc(orders, order)
        .finally(emptyCart)

        const queryUpdateStock = await query(queryCollection, where(documentId(), 'in', cartList.map(item => item.id)))

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update({
            stock: (res.data().stock - cartList.find(item => item.id === res.id).quant)
        })))

        batch.commit()
    }
    
    

    return (
        <div>
            <form onSubmit={generateOrder}>
                <input type="text" name="name" placeholder="Nombre" value={dataForm.name} onChange={handleInputChange}/>
                <input type="tel" name="phone" placeholder="Telefono de contacto" value={dataForm.phone} onChange={handleInputChange}/>
                <input type="email" name="email" placeholder="Email" value={dataForm.email} onChange={handleInputChange}/>
                <input type="email" name="email" placeholder="Email" value={dataForm.email} onChange={handleInputChange}/>
                <button className="btn cart-btn" type="submit">Finalizar compra</button>
            </form>
        </div>
    )
}