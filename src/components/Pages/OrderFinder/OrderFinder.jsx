import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Ring, SuperBalls } from '@uiball/loaders';
import { toast } from 'react-toastify';

import './OrderFinder.scss'


const generateOrderFinderSchema = yup.object().shape({
    id: yup.string().length(20, `La ID debe ser de 20 digitos`).required('Coloca una ID para realizar la busqueda')
})

export const OrderFinder = () => {
    const {register, handleSubmit, formState: {errors}} = useForm ({resolver: yupResolver(generateOrderFinderSchema)});
    const [isLoading, setIsLoading] = useState()
    const [orderData, setOrderData] = useState({})
    const db = getFirestore()

    const onSubmit = (data) => {
        setIsLoading(true)
        getOrderData(data.id)
        toast.info('Buscando orden', {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            icon: <Ring size={40} lineWeight={5} speed={2}  color="white" />
        })
    }

    const getOrderData = async (docId) => {
        const queryOrder = doc(db, 'orders', docId)
        await getDoc(queryOrder)
        .then(resp => {
            if (resp.data()) {
                setOrderData({id: resp.id, ...resp.data()})
                toast.success('Orden encontrada', {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    toastId: "find-success",
                })
            } else {
                setOrderData({id: resp.id, ...resp.data()})
                toast.error('Orden inexistente, comprueba el ID', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    toastId: "find-error",
                })
            }
        })
        .finally(
            setTimeout(() =>{
                setIsLoading(false)
            }, 2500)
        )
    }

    return (
        <>
            <div className='order-finder-container'>
                <h2 className='order-finder-title'>Buscar orden</h2>
                <form className='order-finder-form' onSubmit={handleSubmit(onSubmit)}>
                    <p className='order-finder-text'>Ingrese la ID de la orden</p>
                    <input className='order-finder-input' type="text" {...register("id")} placeholder="ID: 0a1b2c3d4e5f6g7h8i9j"/>
                    {errors.id && <p className='form-error'>{errors.id.message}</p>}
                    <button className="btn" type="submit">Buscar orden</button>
                </form>
            </div>
            {isLoading ? <div className='loader'><SuperBalls size={120} speed={1.4} color="#ff9f1c" /></div>
                :
                <div className='order-view'>
                    <h2 className='order-view-title'>Orden de compra</h2>
                    <p className='order-view-data'>ID: {orderData.id}</p>
                    <p className='order-view-data'>Fecha de la compra: {orderData.date}</p>
                    <p className='order-view-data'>Total gastado: ${orderData.total}</p>
                </div>
            }
        </>
    )
}


