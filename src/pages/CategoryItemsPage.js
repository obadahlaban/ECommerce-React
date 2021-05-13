import React, {useState} from "react";
import Items from "../container/Items";

export default function CategoryItemsPage(props) {
    const [products, setProducts] = useState([
        {
            product_id: 1,
            productName: "iphone",
            description: "good phone",
            image: "https://picsum.photos/800",
            isSold: false,
            price: 500,
            category: "Electronics"
        },
        {
            product_id: 2,
            productName: "Pant",
            description: "good phone",
            image: "https://picsum.photos/800",
            isSold: false,
            price: 500,
            category: "Clothes"
        },
        {
            product_id: 3,
            productName: "iphone",
            description: "good phone",
            image: "https://picsum.photos/800",
            isSold: false,
            price: 600,
            category: "Electronics"
        },
        {
            product_id: 4,
            productName: "T-shirt",
            description: "good phone",
            image: "https://i.imgur.com/1GrakTl.jpg",
            isSold: false,
            price: 500,
            category: "Clothes"
        }
    ]);

    return (
        <div>
            {props.category} ITEMS PAGE
            <Items items={products} />
        </div>
    )
}