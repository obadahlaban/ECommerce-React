import React, {useContext} from "react";
import "./ShoppingCart.css";
import CartItem from "../../components/CartItem";
import {Link} from "react-router-dom";
import ShippingAddress from "../../components/adresses/ShippingAddress";
import {LikedPosts} from "../../store/LikedPosts";
import BillingAddress from "../../components/adresses/BillingAddress";

const ShoppingCart = () => {
    const {likedProduct} = useContext(LikedPosts);
    const totalPrice = likedProduct.reduce((acc, likedProduct) => acc + likedProduct.price, 0);

    const rCart = likedProduct.map(product => {
            return (
                <div>
                    <CartItem
                        id={product.id}
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
            <div className="col-md-7 cart border">
                <div className="title">
                    <div className="row">
                        <div className="col">
                            <h4><b>Shopping Cart</b></h4>
                        </div>
                        <div className="col align-self-center text-right text-muted">{likedProduct.length} items</div>
                    </div>
                </div>
                {rCart}
                <div>
                    <Link to="/buyer/items">Back to shop</Link>
                </div>
            </div>
            <div className="col-md-5 summary">
                <div>
                    <h5><b>Summary</b></h5>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">ITEMS {likedProduct.length}</div>
                    <div className="col text-right">${totalPrice}</div>
                </div>
                <div className="row mt-3 justify-content-between">
                    <div className="col">
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            Shipping Address
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                data-bs-target="#billingModal">
                            Billing Address
                        </button>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Shipping Address</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <ShippingAddress/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="billingModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Billing Address</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <BillingAddress/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 d-grid gap-2">
                    <button className="btn btn-primary btn-success">Checkout</button>
                </div>
            </div>
        </div>
    )


}

export default ShoppingCart;