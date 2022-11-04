import React from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'
import { SuperBalls } from '@uiball/loaders'
import { toast } from 'react-toastify'

import './Checkout.scss'

const toastSuccess = () => {
    
}

export const Checkout = ({orderId}) => {
    const [orderData, setOrderData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const db = getFirestore()
    const queryOrder = doc(db, 'orders', orderId)
    useEffect(()=>{
        getDoc(queryOrder)
        .then(resp => {
            setOrderData({id: resp.id, ...resp.data()})
            setTimeout(() => {
                setIsLoading(false)
                toast.success('Compra finalizada', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    toastId: "buy-succes",
                })
            }, 2500)
        })
    },[])
    
    return (
        <div className='checkout'>
            {isLoading ? <div className='loader'><SuperBalls size={120} speed={1.4} color="#ff9f1c" /></div>
            :
            <>
                <h2 className='checkout-title'>Tu compra</h2>
                <p className='checkout-text'>ID: {orderData.id}</p>
                <p className='checkout-text'>Total: ${orderData.total}</p>
                <p className='checkout-text'>Fecha: {orderData.date}</p>
                <div className='checkout-contact'>
                    <h3 className='checkout-subtitle'>Datos de contacto</h3>
                    <p className='checkout-text'>Nombre: {orderData.buyer.name}</p>
                    <p className='checkout-text'>Email: {orderData.buyer.email}</p>
                    <p className='checkout-text'>Telefono: {orderData.buyer.phone}</p>
                </div>
            </>
            }
        </div>
    )
}
