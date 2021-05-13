import './App.css';
import BuyerBlog from "./container/BuyerBlog";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import SellerBlog from "./container/SellerBlog";
import SignIn from "./container/SignIn";
import SignUp from "./components/SignUp";
import React from "react";
import AdminBlog from "./container/AdminBlog";

function App() {
    return (


        <BrowserRouter>
            <Switch>
                <Route path="/buyer" component={BuyerBlog}/>
                <Route path="/seller" component={SellerBlog}/>
                <Route path="/signIn" component={SignIn}/>
                <Route path="/signUp" component={SignUp}/>
                <Route path="/admin" component={AdminBlog}/>
                <Redirect from="/" to="/buyer"/>
            </Switch>
        </BrowserRouter>


    );
}

export default App;
