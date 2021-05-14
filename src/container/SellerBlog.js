import React, {useState} from "react";

import SignIn from "./SignIn";
import {Link, Route, Switch} from 'react-router-dom';
import AddItem from "../components/sellerComponent/AddItem";
import MyItem from "../components/sellerComponent/MyItem";
import BuyersReviews from "../components/sellerComponent/BuyersReviews";


const SellerBlog = () => {
    const [username, setUsername] = useState(false);

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/seller/myItem" className="nav-link">My Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/seller/addItem" className="nav-link">Add Item</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/seller/buyerReviews" className="nav-link">Reviews</Link>
                            </li>
                        </ul>
                        <form className="d-flex">

                            <label className="nav-link"><Link to="/signIn">Sign out </Link></label>


                        </form>

                    </div>
                </div>
            </nav>

            <div className="App">
                <div className="container-fluid pt-4">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <Switch>

                                <Route path="/seller/buyerReviews" component={BuyersReviews}/>
                                <Route path="/seller/myItem" component={MyItem}/>
                                <Route path="/signIn" component={SignIn}/>
                                <Route path="/seller/addItem" component={AddItem}/>

                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default SellerBlog;