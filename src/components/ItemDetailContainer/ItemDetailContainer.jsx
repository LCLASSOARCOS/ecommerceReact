import { getProductById, getProducts, getProductsByCategory } from "../../asyncMock"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    const[product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(()=>{
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
    }, [productId])
    
    return(
        <div>
            <h1>Detalle del producto 1</h1>
            <ItemDetail {...product} /> 
            
        </div>
    )
}

export default ItemDetailContainer