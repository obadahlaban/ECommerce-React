import React from "react";
import "./ShoppingCart.css";
import CartItem from "../../components/CartItem";

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
                <div className="back-to-shop"><a href="#">&leftarrow;</a><span
                    className="text-muted">Back to shop</span></div>
            </div>
            <div className="col-md-4 summary">
                <div>
                    <h5><b>Summary</b></h5>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col">ITEMS 3</div>
                    <div className="col text-right">&euro; 132.00</div>
                </div>
                <form>
                    <p>SHIPPING Address</p>
                    <div><input type="checkbox"/> Billing Address</div>

                </form>
                <hr></hr>
                <div className="row">
                    <div className="col">TOTAL PRICE</div>
                    <div className="col text-right">&euro; 137.00</div>
                </div>
                <button className="btn">CHECKOUT</button>
            </div>
        </div>
    )


}

export default ShoppingCart;