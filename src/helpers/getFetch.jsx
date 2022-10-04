import React from "react";

export const getItemsList = () => {
    return fetch('./src/helpers/games.json')
    .then(res => res.json())
}

export const getItemById = (id, gameList) => {
    return gameList.games.find((game) => {
        return game.id === id
    })
}