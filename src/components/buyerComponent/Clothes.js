import React, {useContext} from "react";
import {AllProducts} from "../../app/AllProducts";
import Item from "../Item";


export default function Clothes() {
    const {products, setProduct} = useContext(AllProducts);

    const rProducts = products.filter(product => product.category === "Clothes").map(product => {
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

    return (

        <div className="container redBorder">
            <div className="row align-items-start ">
                {rProducts}
            </div>
        </div>
    )


}

