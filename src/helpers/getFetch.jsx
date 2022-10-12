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
    },
    {
        id: 6,
        name: "Potion Permit",
        price: 30,
        sale: 10,
        stock: 25,
        img: "https://media.rawg.io/media/games/496/49664cc0aca1a464a778f0c7d2600c2b.jpg",
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
                    id: 5,
                    name: "GOG",
                    slug: "gog"
                }
            }
        ]
    },
    {
        id: 7,
        name: "NBA 2K23",
        price: 60,
        sale: 10,
        stock: 25,
        img: "https://media.rawg.io/media/screenshots/f63/f639934efeabd98ff2cf48d9fa880217.jpg",
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
            }
        ]
    },
    {
        id: 8,
        name: "Dakar Desert Rally",
        price: 50,
        sale: 20,
        stock: 25,
        img: "https://media.rawg.io/media/screenshots/9b5/9b50c1abcc498b70e5ac0305a12be28f.jpg",
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
            }
        ]
    },
    {
        id: 9,
        name: "Escape Academy",
        price: 25,
        sale: 10,
        stock: 25,
        img: "https://media.rawg.io/media/games/046/046a0d88df42efb3a5c080af9ad91e65.jpg",
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
                        id: 186,
                        name: "Xbox Series S/X",
                        slug: "xbox-series-x"
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
                        id: 5,
                        name: "GOG",
                        slug: "gog"
                    }
                }
            ]
    },
    {
        id: 10,
        name: "Thymesia",
        price: 50,
        sale: 20,
        stock: 25,
        img: "https://media.rawg.io/media/games/829/829dcd5947ea2f62d66ecf2111ff2a3d.jpg",
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
                    id: 186,
                    name: "Xbox Series S/X",
                    slug: "xbox-series-x"
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
                    id: 5,
                    name: "GOG",
                    slug: "gog"
                }
            }
        ]
    },
    {
        id: 11,
        name: "Assassin's Creed Freedom Cry",
        price: 50,
        sale: 20,
        stock: 25,
        img: "https://media.rawg.io/media/games/d2f/d2f925d2c1518d45c45f91cc32afce68.jpg",
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
            },
            {
                platform: {
                    id: 14,
                    name: "Xbox 360",
                    slug: "xbox360"
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
        id: 12,
        name: "Brotato",
        price: 15,
        sale: 30,
        stock: 25,
        img: "https://media.rawg.io/media/screenshots/ed8/ed8a780ca2d64dcd38f8ff3bcecf050a.jpg",
        platforms: [
            {
                platform: {
                    id: 4,
                    name: "PC",
                    slug: "pc"
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
            }
        ]
    },
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