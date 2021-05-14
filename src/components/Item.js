import React, {useContext} from "react";
import Review from "./Review";
import {LikedPosts} from "../store/LikedPosts";


export default function Item(props) {
    const {likedProduct,setLikedProduct} = useContext(LikedPosts);

    const addToCart = () => {
        setLikedProduct([...likedProduct, props]);
    }

    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.price} $</p>
                    <Review product={props.product} id={props.id}/>
                    <button onClick = {addToCart} className="btn btn-primary mt-2">Add to cart</button>
                </div>
        </div>
    );
}