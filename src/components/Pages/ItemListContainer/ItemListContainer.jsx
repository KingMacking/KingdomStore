import { SuperBalls } from "@uiball/loaders";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCard } from "./ItemCard";
import { collection, getDocs, getFirestore} from "firebase/firestore";

import "./ItemListContainer.scss"

export const ItemListContainer = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()
    const {storeId} = useParams()

    const filterCategory = (gamesData) => {
        return gamesData.filter(game => game.platforms.find(plat => {
            return plat.platform.slug.includes(categoryId)
        }))
    }

    const filterStore = (gamesData) => {
        return gamesData.filter(game => game.stores.find(sto => {
            return sto.store.slug.includes(storeId)
        }))
        
    }

    const db = getFirestore()
    const queryCollection = collection(db, 'games')
    
    useEffect(() =>{
        getDocs(queryCollection)
        .then((res) => {
                if (categoryId) {
                    if (storeId) { 
                        setGames(filterStore(filterCategory(res.docs.map(prod => ({id: prod.id, ...prod.data()})))))
                    } else { 
                        setGames(filterCategory(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                    }
                } else { 
                    setGames(res.docs.map(prod=> ({id: prod.id, ...prod.data()})))
                }
            }
        )
        .finally(() => setLoading(false))
    },[categoryId, storeId])
    
    return (
        <div>
            <section className="games-cards container mx-auto">
                {
                    loading ? <SuperBalls size={70} speed={1.4} color="#ff9f1c" /> : games.map(game => (<ItemCard key={game.id} game={game}/>))
                }
            </section>
        </div>
    )
}