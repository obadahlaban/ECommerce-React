import React from "react";

import SignIn from "./SignIn";
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import {APIConfig} from "../app/API-Config";
import SignUp from "../components/SignUp";
import Items from "./Items";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import Review from "../components/Review";

const Blog = () => {

    return (
        <APIConfig.Provider value={'http://localhost:8080/posts/'}>
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
                                <Link to="/posts" className="nav-link" >All Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shoppingCart" className="nav-link" >Shopping</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/reviews" className="nav-link" >Reviews</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Electronics</a></li>
                                    <li><a className="dropdown-item" href="#">Clothes</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to="/shoppingCart" className="nav-link" >Shopping</Link>
                            <Link to="/signIn" className="nav-link" >Sign In</Link>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="App">
                <div className="container-fluid pt-4">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <Switch>
                                <Route path="/reviews" component={Review}/>
                                <Route path="/posts" component={Items}/>
                                <Route path="/signIn" component={SignIn}/>
                                <Route path="/signUp" component={SignUp}/>
                                <Route path="/shoppingCart" component={ShoppingCart}/>
                                <Redirect from="/" to="/posts/"/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </APIConfig.Provider>


    )


}

export default Blog;