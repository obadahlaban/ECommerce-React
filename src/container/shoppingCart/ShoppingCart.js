import React from "react";
import "./ShoppingCart.css";
import CartItem from "../../components/CartItem";
import {Link} from "react-router-dom";
import ShippingAddress from "../../components/adresses/ShippingAddress";

const ShoppingCart = () => {

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
                    <Link to = "/posts" />Back to shop</div>
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
                    <p><button type="button" onClick={ShippingAddress}> Shipping Address </button></p>
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