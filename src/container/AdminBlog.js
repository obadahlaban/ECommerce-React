import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import BuyersReviews from "../components/sellerComponent/BuyersReviews";
import MyItem from "../components/sellerComponent/MyItem";
import SignIn from "./SignIn";
import AddItem from "../components/sellerComponent/AddItem";

const AdminBlog = () => {


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
                                <Link to="/seller/myItem" className="nav-link" >Reviews Pending </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/seller/addItem" className="nav-link" >Sellers Joining Pending</Link>
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

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )









}

export default AdminBlog;