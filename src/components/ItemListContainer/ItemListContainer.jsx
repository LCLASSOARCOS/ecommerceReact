import classes from './ItemListContainer.module.css'
import navidadImage from '../../assets/navidad.jpeg';
import ItemCount from '../ItemCount/ItemCount';
import { useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting}) => {
    const[products, setProducts] = useState([])

    const {categoryId } = useParams()

    useEffect(()=>{
        const asyncFuction = categoryId ? getProductsByCategory : getProducts
        asyncFuction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error=>{
                console.error(error)
            })
    }, [categoryId])

    return (
        <>
           <h1>{greeting + ( categoryId ?? '' )}</h1>
           <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer