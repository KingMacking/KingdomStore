import React from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'

import './Checkout.scss'

export const Checkout = ({orderId}) => {
    const [orderData, setOrderData] = useState({})
    const db = getFirestore()
    const queryOrder = doc(db, 'orders', orderId)
    useEffect(()=>{
        getDoc(queryOrder)
        .then(resp => setOrderData({id: resp.id, ...resp.data()}))
    })

    return (
        <div className='checkout'>
            <h2 className='checkout-title'>Checkout</h2>
            <p className='checkout-text'>El id de tu compra es: {orderData.id}</p>
            <p className='checkout-text'>El total de tu compra es ${orderData.total}</p>
        </div>
    )
}
