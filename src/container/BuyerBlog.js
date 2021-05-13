import React, {useState} from "react";
import {Link, Route, Switch} from 'react-router-dom';
import {APIConfig} from "../store/API-Config";
import Items from "./Items";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import Review from "../components/Review";
import ShippingAddress from "../components/adresses/ShippingAddress";
import {LogIn} from "../store/LogIn";
import {AllProducts} from "../store/AllProducts";
import Clothes from "../components/buyerComponent/Clothes";
import Electronics from "../components/buyerComponent/Electronics";
import {LikedPosts} from "../store/LikedPosts";


const BuyerBlog = () => {
    const [username, setUsername] = useState(false);
    const [likedProduct,setLikedProduct] = useState([]);
    const [products, setproducts] = useState([
        {
            product_id: 1,
            productName: "iphone",
            description: "good phone",
            image: "https://picsum.photos/800",
            isSold: false,
            price: 500,
            category: "Electronics"
        },
        {
            product_id: 2,
            productName: "Pant",
            description: "good phone",
            image: "https://picsum.photos/800",
            isSold: false,
            price: 500,
            category: "Clothes"
        },
        {
            product_id: 3,
            productName: "iphone",
            description: "good phone",
            image: "https://picsum.photos/800",
            isSold: false,
            price: 600,
            category: "Electronics"
        },
        {
            product_id: 4,
            productName: "T-shirt",
            description: "good phone",
            image: "https://i.imgur.com/1GrakTl.jpg",
            isSold: false,
            price: 500,
            category: "Clothes"
        }
    ]);

    return (
        <APIConfig.Provider value={'http://localhost:8080/posts/'}>
            <LogIn.Provider value={{username, setUsername}}>
                <AllProducts.Provider value={{products, setproducts}}>
                    <LikedPosts.Provider value={{likedProduct,setLikedProduct}}>
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
                                    <li className="nav-item">
                                        <Link to="/buyer/reviews" className="nav-link">Reviews</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Categories
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li className="dropdown-item"><Link to="/buyer/electronics">Electronics</Link></li>
                                            <li className="dropdown-item"><Link to="/buyer/clothes" >Clothes</Link></li>

                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <Link to="/buyer/shoppingCart" className="nav-link">Shopping</Link>


                                    <label className="nav-link"><Link to="/signIn">Sign In </Link></label>


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
                                        <Route path="/buyer/reviews" component={Review}/>
                                        <Route path="/buyer/items" component={Items}/>
                                        <Route path="/buyer/clothes" component={Clothes}/>
                                        <Route path="/buyer/electronics" component={Electronics}/>


                                        <Route path="/buyer/shoppingCart" component={ShoppingCart}/>
                                        {/*   <Redirect from="/" to="/posts/"/>*/}
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                    </LikedPosts.Provider>
                </AllProducts.Provider>
            </LogIn.Provider>
        </APIConfig.Provider>


    )


}

export default BuyerBlog;