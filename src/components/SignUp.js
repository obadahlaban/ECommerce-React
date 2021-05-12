import React from "react";

const SignUp = () => {
const handleSubmit = () => {

}
    return (

        <form className="w-50 position-absolute top-50 start-50 translate-middle row g-3 needs-validation" onSubmit={handleSubmit}>
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
            <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">City</label>
                <input type="text" className="form-control" id="validationCustom03" required/>
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom04" className="form-label">State</label>
                <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Iowa</option>
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                <input type="text" className="form-control" id="validationCustom05" required/>
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
            </div>

            <div className="col-12">
                <button className="btn btn-primary" type="submit">SignUp </button>
            </div>
        </form>


)




}

export default SignUp;