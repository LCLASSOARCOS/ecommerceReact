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
    const[loading, setLoading] = useState(true)

    const {categoryId } = useParams()

    useEffect(()=>{
        if(categoryId) document.title = categoryId

        return ()=> {
            document.title = 'iLASS'
        }
    }, [categoryId])

    useEffect(()=>{
        setLoading(true)
        const asyncFuction = categoryId ? getProductsByCategory : getProducts
        
        asyncFuction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error=>{
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <h1 className={classes.cargue}>Cargando los productos</h1>
    }

    return (
        <>
           <h1 className={classes.titulo}>{greeting + ( categoryId ?? '' )}</h1>
           <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer