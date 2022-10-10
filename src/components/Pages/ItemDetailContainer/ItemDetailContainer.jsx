import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/getFetch";
import { ItemDetail } from "./ItemDetail";
import './ItemDetailContainer.scss'


export const ItemDetailContainer = () => {
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(true);

    const {gameId} = useParams()

    useEffect(() =>{
        gFetch()
        .then(data => setGame(data.find(game=>{
            return game.id == gameId
        })))
        .finally(() => setLoading(false))
    },[gameId])

    return (
        <div className="game-detail-container">
            { loading ? <h2>"Cargando..."</h2> : <ItemDetail game={game}/>}
        </div>
    )
}