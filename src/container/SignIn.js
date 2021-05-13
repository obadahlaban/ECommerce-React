import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {LogIn} from "../store/LogIn";

const SignIn = (props) => {
    const {username, setUsername} = useContext(LogIn);
//fix it tommorow

    return (

        <form className=" position-absolute top-50 start-50 translate-middle card">

            <h1 className="h3 mb-3 fw-normal card-header">Please sign in</h1>

            <div className="card-body px-4">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mt-2">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3 mt-2">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <div>
                    <button className=" me-2 btn btn-primary ">Sign in</button>
                </div>
                <div className="text-secondary mt-2">If you dont have an account
                    <Link to="/signUp" className="ms-1">Sign Up</Link></div>


            </div>

        </form>
    )
}

export default SignIn;