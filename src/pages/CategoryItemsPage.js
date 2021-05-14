import React, {useEffect, useState} from "react";
import Items from "../container/Items";
import ProductAPI from "../services/ProductAPI";

export default function CategoryItemsPage(props) {
    const [products, setProducts] = useState([]);

    useEffect(function (){

        ProductAPI.listByCategory(props.category).then(response => setProducts(response.data));



    },[])

    return (
        <div>
            {props.category} ITEMS PAGE
            <Items items={products} />
        </div>
    )
}