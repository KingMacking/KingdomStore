import React from "react";
import { useState, useEffect } from "react";
import { getItemById, getItemsList } from "../../../helpers/getFetch";
import { ItemDetail } from "./ItemDetail";
import './ItemDetailContainer.scss'


export const ItemDetailContainer = () => {
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getItemsList()
        .then(data => getItemById(2,data))
        .then(obj => setGame(obj))
        .finally(() => setLoading(false))
    },[])

    return (
        <div className="game-detail-container">
            { loading ? <h2>"Cargando..."</h2> : <ItemDetail game={game}/>}
        </div>
    )
}