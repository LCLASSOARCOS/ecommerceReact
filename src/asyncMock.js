const products = [
    {
        id: '1',
        name: 'Camiseta Scarface',
        price: 89000,
        category: 'hombre',
        img: 'https://static.pullandbear.net/2/photos//2024/V/0/2/p/4239/523/800/4239523800_2_1_8.jpg?t=1676883140627&imwidth=1125',
        stock: 25,
        description: 'Camiseta Scarface negra'
    },

    { 
        id: '2', 
        name: 'Cazadora Doble FAZ', 
        price: 450000, 
        category: 'hombre', 
        img: 'https://static.pullandbear.net/2/photos//2024/V/0/2/p/7712/588/710/01/7712588710_2_1_8.jpg?t=1699868889350&imwidth=750', 
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
        name: 'Sudadera cremallera', 
        price: 160000, 
        category: 'hombre', 
        img: 'https://static.pullandbear.net/2/photos//2024/V/0/2/p/3590/560/802/3590560802_2_1_8.jpg?t=1702308867074&imwidth=750', 
        stock: 25, 
        description: 'Sudadera cremallera 2024'
    },
    {
        id: '5',
        name: 'Camise Manga sisa',
        price: 89000,
        category: 'mujer',
        img: 'https://static.pullandbear.net/2/photos//2024/V/0/1/p/3470/406/400/3470406400_2_1_8.jpg?t=1704965715098&imwidth=750',
        stock: 25,
        description: 'Camiseta Scarface negra'
    },

    { 
        id: '6', 
        name: 'Minifalda abertura', 
        price: 130000, 
        category: 'mujer', 
        img: 'https://static.pullandbear.net/2/photos//2024/V/0/1/p/3395/318/802/01/3395318802_2_3_8.jpg?t=1704993187949&imwidth=750', 
        stock: 25, 
        description: 'buzo sonora 2024'
    },

    { 
        id: '7', 
        name: 'Vestido corto TUL', 
        price: 99000, 
        category: 'mujer', 
        img: 'https://static.pullandbear.net/2/photos//2024/V/0/1/p/3390/417/020/3390417020_2_1_8.jpg?t=1704877678435', 
        stock: 25, 
        description: 'jean moda bota ancha 2024'
    },

    { 
        id: '8', 
        name: 'Chaqueta Vaquera', 
        price: 189000, 
        category: 'mujer', 
        img: 'https://static.pullandbear.net/2/photos//2023/I/0/1/p/7713/317/808/7713317808_2_3_8.jpg?t=1692873730332&imwidth=750', 
        stock: 25, 
        description: 'Sudadera cremallera 2024'
    },

    {
        id: '9',
        name: 'Vestido Largo tirantes',
        price: 149000,
        category: 'sale',
        img: 'https://static.pullandbear.net/2/photos//2023/I/0/1/p/7393/370/808/7393370808_2_6_8.jpg?t=1691072651725&imwidth=750',
        stock: 25,
        description: 'Camiseta Scarface negra'
    },

    { 
        id: '10', 
        name: 'Zapatos Urban Clasica', 
        price: 130000, 
        category: 'sale', 
        img: 'https://static.pullandbear.net/2/photos//2023/I/1/2/p/2211/240/001/2211240001_2_2_8.jpg?t=1691480744590&imwidth=750', 
        stock: 25, 
        description: 'buzo sonora 2024'
    },

    { 
        id: '11', 
        name: 'Sudadera logo STWD', 
        price: 130000, 
        category: 'sale', 
        img: 'https://static.pullandbear.net/2/photos//2023/I/0/2/p/7592/504/400/7592504400_2_1_8.jpg?t=1690983382462&imwidth=750', 
        stock: 25, 
        description: 'jean moda bota ancha 2024'
    },

    { 
        id: '12', 
        name: 'Bolso Bandolera', 
        price: 120000, 
        category: 'sale', 
        img: 'https://static.pullandbear.net/2/photos//2024/V/1/1/p/4202/240/003/4202240003_2_2_8.jpg?t=1700149594754&imwidth=750', 
        stock: 25, 
        description: 'Sudadera cremallera 2024'
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