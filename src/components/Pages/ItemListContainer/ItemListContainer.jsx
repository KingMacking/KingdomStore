import React, { useState, useEffect } from "react";
import { getItemsList } from "../../../helpers/getFetch";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import { ItemCard } from "./ItemCard";

import "./ItemListContainer.scss"
const Title = prop => <h1>{prop.title}</h1>

export const ItemListContainer = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
        getItemsList()
        .then(data=>setGames(data.games))
        .finally(() => setLoading(false))
    },[])
    
    return (
        <div>
            <Title title={"Estamos trabajando en ello"} />
            <section className="games-cards">
                {
                    loading ? <Title title="Cargando..."/> : games.map(game => (<ItemCard key={game.id} game={game}/>))
                }
            </section>
        </div>
    )
}