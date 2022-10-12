import { SuperBalls } from "@uiball/loaders";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/getFetch";
import { ItemCard } from "./ItemCard";

import "./ItemListContainer.scss"
const Title = prop => <h1>{prop.title}</h1>

export const ItemListContainer = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()
    console.log(categoryId)
    const {storeId} = useParams()
    console.log(storeId);

    const filterCategory = (gamesData) => {
        return gamesData.filter(game => game.platforms.find(plat => {
            return plat.platform.slug.includes(categoryId)
        }))
    }

    const filterStore = (gamesData) => {
        return gamesData.filter(game => game.stores.find(plat => {
            return plat.store.slug.includes(storeId)
        }))
    }
    
    useEffect(() =>{
        if (categoryId){
            if (storeId){
                gFetch()
                .then(data => setGames(filterStore(filterCategory(data))))
                .finally(() => setLoading(false))
            } else {
                gFetch()
                .then(data => setGames(filterCategory(data)))
                .finally(() => setLoading(false))
            }
        } else {
            gFetch()
            .then(data=>setGames(data))
            .finally(() => setLoading(false))
        }
        
    },[categoryId, storeId])
    
    return (
        <div>
            <section className="games-cards">
                {
                    loading ? <SuperBalls size={70} speed={1.4} color="#ff9f1c" /> : games.map(game => (<Link key={game.id} to={`/detail/${game.id}`}><ItemCard game={game}/></Link>))
                }
            </section>
        </div>
    )
}