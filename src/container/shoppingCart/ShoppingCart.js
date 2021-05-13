import React, {useContext} from "react";
import "./ShoppingCart.css";
import CartItem from "../../components/CartItem";
import {Link} from "react-router-dom";
import ShippingAddress from "../../components/adresses/ShippingAddress";
import {LikedPosts} from "../../store/LikedPosts";
import {AllProducts} from "../../store/AllProducts";
import Item from "../../components/Item";

const ShoppingCart = (props) => {
    const {likedProduct, setLikedProduct} = useContext(LikedPosts);
    const {products, setProduct} = useContext(AllProducts);

    const rCart = products.filter(item => item.id === likedProduct.id).map(product => {

            return (
                <div>
                    <CartItem
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


        }
    )

    return (
        <div className="row">
            <div className="col-md-8 cart">
                <div className="title">
                    <div className="row">
                        <div className="col">
                            <h4><b>Shopping Cart</b></h4>
                        </div>
                        <div className="col align-self-center text-right text-muted">3 items</div>
                    </div>
                </div>
                <CartItem></CartItem>
                <div>
                    <Link to="/posts"/>Back to shop
                </div>
            </div>
            <div className="col-md-4 summary">
                <div>
                    <h5><b>Summary</b></h5>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col">ITEMS 3</div>
                    <div className="col text-right">$ 132.00</div>
                </div>
                <div>
                    <p>
                        <button type="button" onClick={ShippingAddress}> Shipping Address</button>
                    </p>
                    <div><input type="checkbox"/> Billing Address</div>

                </div>
                <hr></hr>
                <div className="row">
                    <div className="col">TOTAL PRICE</div>
                    <div className="col text-right">$ 137.00</div>
                </div>
                <button className="mt-2 btn btn-primary">CHECKOUT</button>
            </div>
        </div>
    )


}

export default ShoppingCart;