import React, { useState, useEffect } from "react";
import { ItemCard } from "./ItemCard";
const Title = prop => <h1>{prop.title}</h1>

export const ItemListContainer = (props) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
        fetch('./src/helpers/games.json')
        .then(res=>res.json())
        .then(data=>setGames(data.games))
        .finally(() => setLoading(false))
        console.log(games)
    },[])
    
    return (
        <div>
            <Title title={"Estamos trabajando en ello"} />
            {
                loading ? <Title title="Cargando..."/> : games.map(game => (<ItemCard img={game.img} key={game.id}/>))
            }
        </div>
    )
}