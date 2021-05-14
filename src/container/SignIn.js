import React, {useContext, useRef} from "react";
import {Link, useHistory} from "react-router-dom";
import {AuthenticatedUserData} from "../store/AuthenticatedUserData";

const SignIn = (props) => {
    const {authenticated, setAuthenticated} = useContext(AuthenticatedUserData);

    setAuthenticated(null);

    let form = useRef();
    let history = useHistory();

    const login = (e) => {
        e.preventDefault();

        const username = form.current['username'].value;
        const password = form.current['password'].value;

        if (username === 'Seller') {
            if (password === 'seller') {
                setAuthenticated(username);
                history.push('/seller');
            }
        } else {
            if (password === '123456') {
                setAuthenticated(username);
                history.push('/buyer')
            }
        }
    }
//fix it tommorow

    return (

        <form className=" position-absolute top-50 start-50 translate-middle card" ref={form} onSubmit={login} >

            <h1 className="h3 mb-3 fw-normal card-header">Please sign in</h1>

            <div className="card-body px-4">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" name="username" placeholder="username"/>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating mt-2">
                    <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3 mt-2">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <div>
                    <button className="me-2 btn btn-primary" type="submit">Sign in</button>
                </div>
                <div className="text-secondary mt-2">If you dont have an account
                    <Link to="/signUp" className="ms-1">Sign Up</Link></div>


            </div>

        </form>
    )
}

export default SignIn;