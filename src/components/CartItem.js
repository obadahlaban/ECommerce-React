import React, {useContext} from "react";
import {LikedPosts} from "../store/LikedPosts";


const CartItem = (props) => {
    const {likedProduct,setLikedProduct} = useContext(LikedPosts);

    const unlike = () => {
        setLikedProduct(likedProduct.filter(p => p.id !== props.id));
    };

    return (
        <div className="row border-top border-bottom" key={props.id}>
            <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src={props.image} alt="image"/></div>
                <div className="col">
                    <div className="row text-muted">{props.category}</div>
                    <div className="row">{props.productName}</div>
                </div>
                <div className="col">
                    ${props.price}
                </div>
                <div className="col">
                    <button className="close transparent text-error" onClick={unlike}> &#10005;</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;