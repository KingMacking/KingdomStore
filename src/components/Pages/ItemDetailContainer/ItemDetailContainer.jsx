import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/getFetch";
import { ItemDetail } from "./ItemDetail";
import { SuperBalls } from '@uiball/loaders'
import './ItemDetailContainer.scss'



export const ItemDetailContainer = () => {
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(true);

    const {gameId} = useParams()

    useEffect(() =>{
        gFetch()
        .then(data => setGame(data.find(game=>{
            return game.id === parseInt(gameId)
        })))
        .finally(() => setLoading(false))
    },[gameId])

    return (
        <div className="game-detail-container">
            { loading ? <SuperBalls size={70} speed={1.4} color="#ff9f1c" /> : <ItemDetail game={game}/>}
        </div>
    )
}