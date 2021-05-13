import React, {useContext, useState} from "react";
import {APIConfig} from "../app/API-Config";
import Item from "../components/Item";
import {AllProducts} from "../app/AllProducts";



const Items = () => {
    const {products, setProduct}= useContext(AllProducts);


    const rProducts = products.map(product => {
        return (
            <div className="col-6">
            <Item
                id={product.product_id}
                productName={product.productName}
                description={product.description}
                image={product.image}
                isSold={product.isSold}
                price={product.price}
                category={product.category}
                />
            </div>
        )

    });

   const APIs= useContext(APIConfig);
    return (
        <div className="container redBorder">
            <div className="row align-items-start ">
                {rProducts}
            </div>
        </div>



    )

}

export default Items;