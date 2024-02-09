import classes from './ItemListContainer.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebaseConfig';
import { getDocs, collection, query, where } from 'firebase/firestore';

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
        
        const productsCollection = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc =>{
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                (error, 'hubo un error')
            } )
            .finally(()=> {
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