import { getProductById, getProducts, getProductsByCategory } from "../../asyncMock"
import { useEffect, useState, useContext } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import classes from './ItemDetailContainer.module.css'



const ItemDetailContainer = () => {

   

    const[product, setProduct] = useState(null)
    const[loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(()=> {
        if(product) document.title = product.name
        
        return () => {
            document.title = 'iLASS'
        }
    },[product] )

    useEffect(()=>{
        setLoading(true)
        
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productId])

    if(loading) {
        return <h1>Cargando el producto</h1>
    }
    
    return(
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product} /> 
            
        </div>
    )
}

export default ItemDetailContainer