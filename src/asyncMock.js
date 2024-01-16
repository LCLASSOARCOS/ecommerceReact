const products = [
    {
        id: '1',
        name: 'Camiseta Scarface',
        price: 99000,
        category: 'hombre',
        img: 'https://static.pullandbear.net/2/photos//2024/V/0/2/p/4239/523/800/4239523800_2_1_8.jpg?t=1676883140627&imwidth=1125',
        stock: 25,
        description: 'Camiseta Scarface negra'
    },

    { 
        id: '2', 
        name: 'Buzo mujer', 
        price: 100000, 
        category: 'mujer', 
        img: 'https://static.pullandbear.net/2/photos//2024/V/0/2/p/4239/523/800/4239523800_2_1_8.jpg?t=1676883140627&imwidth=1125', 
        stock: 25, 
        description: 'buzo sonora 2024'
    },

    { 
        id: '3', 
        name: 'Camiseta TOKYO', 
        price: 99000, 
        category: 'hombre', 
        img: 'https://static.pullandbear.net/2/photos//2023/I/0/2/p/7242/519/800/7242519800_2_1_8.jpg?t=1684135898798&imwidth=750', 
        stock: 25, 
        description: 'jean moda bota ancha 2024'
    },

    { 
        id: '4', 
        name: 'Pantalon bota Oferta', 
        price: 89000, 
        category: 'sale', 
        img: 'https://static.pullandbear.net/2/photos//2024/V/0/2/p/4239/523/800/4239523800_2_1_8.jpg?t=1676883140627&imwidth=1125', 
        stock: 25, 
        description: 'jean moda bota ancha 2024'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}