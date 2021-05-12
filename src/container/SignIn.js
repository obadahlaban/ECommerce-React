import React from "react";
import {Link} from "react-router-dom";

const SignIn = () => {

    return (

        <form className="w-25 position-absolute top-50 start-50 translate-middle">

            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className=" me-4 btn btn-lg btn-primary ">Sign in</button>
            <button className=" btn btn-lg btn-primary  " ><Link to="/signUp" className="btn-primary ">Sign Up</Link></button>

        </form>
    )
}

export default SignIn;