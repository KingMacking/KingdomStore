import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { SuperBalls } from '@uiball/loaders'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import './ItemDetailContainer.scss'



export const ItemDetailContainer = () => {
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(true);

    const {gameId} = useParams()

    useEffect(() =>{
        const db = getFirestore()
        const queryDoc = doc(db, 'games', gameId)
        getDoc(queryDoc)
        .then(resp => setGame({id: resp.id, ...resp.data()}))
        .finally(() => setLoading(false))
    },[])

    return (
        <div className="game-detail-container">
            { loading ? <SuperBalls size={70} speed={1.4} color="#ff9f1c" /> : <ItemDetail game={game}/>}
        </div>
    )
}