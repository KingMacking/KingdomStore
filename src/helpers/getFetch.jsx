const games = [ 
    {
        id:1,
        name: "Cyberpunk 2077",
        price: 50,
        sale: 0,
        stock: 25,
        img: "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        platforms:[
            {
                platform: {
                    id: 4,
                    name: "PC",
                    slug: "pc"
                }
            },
            {
                platform: {
                    id: 187,
                    name: "PlayStation 5",
                    slug: "playstation5"
                }
            },
            {
                platform: {
                    id: 1,
                    name: "Xbox One",
                    slug: "xbox-one"
                }
            },
            {
                platform: {
                    id: 18,
                    name: "PlayStation 4",
                    slug: "playstation4"
                }
            },
            {
                platform: {
                    id: 186,
                    name: "Xbox Series S/X",
                    slug: "xbox-series-x"
                }
            }
        ],
        stores: [
            {
                store: {
                    id: 1,
                    name: "Steam",
                    slug: "steam"
                }
            },
            {
                store: {
                    id: 3,
                    name: "PlayStation Store",
                    slug: "playstation-store"
                }
            },
            {
                store: {
                    id: 2,
                    name: "Xbox Store",
                    slug: "xbox-store"
                }
            },
            {
                store: {
                    id: 5,
                    name: "GOG",
                    slug: "gog"
                }
            },
            {
                store: {
                    id: 11,
                    name: "Epic Games",
                    slug: "epic-games"
                }
            }
        ]
    },
    {
        id:2,
        name: "Scorn",
        price: 60,
        sale: 5,
        stock: 25,
        img: "https://media.rawg.io/media/games/f8c/f8cc3b4834259f8a812ce77804bc12ed.jpg",
        platforms: [
            {
                platform: {
                    id: 4,
                    name: "PC",
                    slug: "pc"
                }
            },
            {
                platform: {
                    id: 186,
                    name: "Xbox Series S/X",
                    slug: "xbox-series-x"
                }
            }
        ],
        stores: [
            {
                store: {
                    id: 1,
                    name: "Steam",
                    slug: "steam"
                }
            },
            {
                store: {
                    id: 5,
                    name: "GOG",
                    slug: "gog"
                }
            },
            {
                store: {
                    id: 11,
                    name: "Epic Games",
                    slug: "epic-games"
                }
            }
        ]
    },
    {
        id:3,
        name: "Risk of Rain 2",
        price: 30,
        sale: 20,
        stock: 25,
        img: "https://media.rawg.io/media/games/238/238e2b2b24c9838626700c69cacf1e3a.jpg",
        platforms: [
            {
                platform: {
                    id: 4,
                    name: "PC",
                    slug: "pc"
                }
            },
            {
                platform: {
                    id: 1,
                    name: "Xbox One",
                    slug: "xbox-one"
                }
            },
            {
                platform: {
                    id: 18,
                    name: "PlayStation 4",
                    slug: "playstation4"
                }
            },
            {
                platform: {
                    id: 7,
                    name: "Nintendo Switch",
                    slug: "nintendo-switch"
                }
            }
        ],
        stores: [
            {
                store: {
                    id: 1,
                    name: "Steam",
                    slug: "steam"
                }
            },
            {
                store: {
                    id: 3,
                    name: "PlayStation Store",
                    slug: "playstation-store"
                }
            },
            {
                store: {
                    id: 2,
                    name: "Xbox Store",
                    slug: "xbox-store"
                }
            },
            {
                store: {
                    id: 6,
                    name: "Nintendo Store",
                    slug: "nintendo"
                }
            },
            {
                store: {
                    id: 11,
                    name: "Epic Games",
                    slug: "epic-games"
                }
            }
        ]
    },
    {
        id:4,
        name: "Stray",
        price: 50,
        sale: 25,
        stock: 25,
        img: "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg",
        platforms: [
            {
                platform: {
                    id: 4,
                    name: "PC",
                    slug: "pc"
                }
            },
            {
                platform: {
                    id: 187,
                    name: "PlayStation 5",
                    slug: "playstation5"
                }
            },
            {
                platform: {
                    id: 18,
                    name: "PlayStation 4",
                    slug: "playstation4"
                }
            }
        ],
        stores: [
            {
                store: {
                    id: 1,
                    name: "Steam",
                    slug: "steam"
                }
            },
            {
                store: {
                    id: 3,
                    name: "PlayStation Store",
                    slug: "playstation-store"
                }
            }
        ]
    },
    {
        id: 5,
        name: "F1 2022",
        price: 70,
        sale: 35,
        stock: 25,
        img: "https://media.rawg.io/media/games/b3d/b3d7b7ffd5883c7bbe6e4c23d715ad2c.jpg",
        platforms: [
            {
                platform: {
                    id: 4,
                    name: "PC",
                    slug: "pc"
                }
            },
            {
                platform: {
                    id: 187,
                    name: "PlayStation 5",
                    slug: "playstation5"
                }
            },
            {
                platform: {
                    id: 1,
                    name: "Xbox One",
                    slug: "xbox-one"
                }
            },
            {
                platform: {
                    id: 18,
                    name: "PlayStation 4",
                    slug: "playstation4"
                }
            },
            {
                platform: {
                    id: 186,
                    name: "Xbox Series S/X",
                    slug: "xbox-series-x"
                }
            }
        ],
        stores: [
            {
                store: {
                    id: 1,
                    name: "Steam",
                    slug: "steam"
                }
            },
            {
                store: {
                    id: 3,
                    name: "PlayStation Store",
                    slug: "playstation-store"
                }
            },
            {
                store: {
                    id: 11,
                    name: "Epic Games",
                    slug: "epic-games"
                }
            }
        ]
    }
]

export const gFetch = () => {
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            res(games)
        },1500)
    })
}

export const getItemById = (id, gameList) => {
    return gameList.find((game) => {
        return game.id === id
    })
}