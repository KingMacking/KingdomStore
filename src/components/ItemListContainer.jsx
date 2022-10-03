import React, { useState, useEffect } from "react";
import { ItemCard } from "./ItemCard";
const Title = prop => <h1>{prop.title}</h1>

// const getGames = async() =>{
//     const resp = await fetch('src/helpers/games.json');
//     const data = await resp.json();
//     let games = data.games;
//     console.log(games)
//     return games
// }
// let gamesData = await getGames();


export const ItemListContainer = (props) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
        fetch('./src/helpers/games.json')
        .then(res=>res.json())
        .then(data=>setGames(data))
        .finally(() => setLoading(false))
    },[])
    console.log(games)
    return (
        <div>
            <Title title={"Estamos trabajando en ello"} />
            {
                loading ? <Title title="Cargando..."/> : games.map(game => (<ItemCard props={game}/>))
            }
        </div>
    )
}