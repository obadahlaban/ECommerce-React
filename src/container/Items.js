import React, {useContext} from "react";
import Item from "../components/Item";

const Items = (props) => {

    const rProducts = props.items.map(product => {
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
        <div className="container">
            <div className="row align-items-start ">
                {rProducts}
            </div>
        </div>
    )
}

export default Items;