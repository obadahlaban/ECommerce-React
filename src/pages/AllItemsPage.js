import React, {useEffect, useState} from "react";
import Items from "../container/Items";
import ProductAPI from "../services/ProductAPI";

export default function AllItemsPage() {
    const [products, setProducts] = useState([]);

    useEffect(function () {
        ProductAPI.list().then(response => setProducts(response.data));
    }, [])

    return (
        <div>
            ALL ITEMS PAGE
            <Items items={products} />
        </div>
    )
}