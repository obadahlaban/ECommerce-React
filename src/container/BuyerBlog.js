import React, {useState} from "react";
import {Link, Route, Switch} from 'react-router-dom';
import {APIConfig} from "../store/API-Config";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import ShippingAddress from "../components/adresses/ShippingAddress";
import {LogIn} from "../store/LogIn";
import {LikedPosts} from "../store/LikedPosts";
import AllItemsPage from "../pages/AllItemsPage";
import CategoryItemsPage from "../pages/CategoryItemsPage";


const BuyerBlog = () => {
    const [username, setUsername] = useState(false);
    const [likedProduct, setLikedProduct] = useState([]);

    return (
        <APIConfig.Provider value={'http://localhost:8080/posts/'}>
            <LogIn.Provider value={{username, setUsername}}>
                <LikedPosts.Provider value={{likedProduct, setLikedProduct}}>
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
                                        <Link to="/buyer/items" className="nav-link">All Items</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/buyer/shoppingCart" className="nav-link">Shopping</Link>
                                    </li>
                                    {/*<li className="nav-item">*/}
                                    {/*    <Link to="/buyer/reviews" className="nav-link">Reviews</Link>*/}
                                    {/*</li>*/}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Categories
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link
                                                to="/buyer/electronics">
                                                <li className="dropdown-item">Electronics</li>
                                            </Link>
                                            <Link to="/buyer/clothes">
                                                <li className="dropdown-item">Clothes</li>
                                            </Link>

                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <Link to="/signIn"><label className="nav-link">Sign In</label> </Link>
                                </form>
                            </div>
                        </div>
                    </nav>

                    <div className="App">
                        <div className="container-fluid pt-4">
                            <div className="row justify-content-center">
                                <div className="col-8">
                                    <Switch>
                                        <Route path="/buyer/shipping" component={ShippingAddress}/>
                                        {/*<Route path="/buyer/reviews" component={Review}/>*/}
                                        <Route path="/buyer/items" component={AllItemsPage}/>
                                        <Route path="/buyer/clothes">
                                            <CategoryItemsPage category="clothes"/>
                                        </Route>
                                        <Route path="/buyer/electronics">
                                            <CategoryItemsPage category="electronics"/>
                                        </Route>


                                        <Route path="/buyer/shoppingCart" component={ShoppingCart}/>
                                        {/*   <Redirect from="/" to="/posts/"/>*/}
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </LikedPosts.Provider>
            </LogIn.Provider>
        </APIConfig.Provider>


    )


}

export default BuyerBlog;