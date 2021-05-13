import React from "react";

const SignUp = () => {
const handleSubmit = () => {

}
    return (

        <form className="w-50 position-absolute top-50 start-50 translate-middle row g-3 needs-validation" onSubmit={handleSubmit}>
            <h1>New User </h1>
            <hr></hr>
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">First name</label>
                <input type="text" className="form-control" id="validationCustom01"  required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationCustom02"  required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                <div className="input-group has-validation">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>


                </div>
            </div>

            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                           value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Seller</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                           value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Buyer</label>
                </div>
            </div>


            <div className="col-12">
                <button className="btn btn-primary" type="submit">SignUp </button>
            </div>
        </form>


)




}

export default SignUp;