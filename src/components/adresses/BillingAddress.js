import React from "react";

const BillingAddress = () => {

return (


    <form  className="w-50 position-absolute top-50 start-50 translate-middle row g-3 needs-validation">
        <h1> Billing Address</h1>
        <hr></hr>
        <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">Street Address</label>
            <input type="text" className="form-control" id="validationCustom02" required/>
            <div className="invalid-feedback">
                Please provide a valid Street address.
            </div>
        </div>
        <div className="col-md-4">
            <label htmlFor="validationCustom03" className="form-label">City</label>
            <input type="text" className="form-control" id="validationCustom03" required/>
            <div className="invalid-feedback">
                Please provide a valid city.
            </div>
        </div>
        <div className="col-md-4">
            <label htmlFor="validationCustom04" className="form-label">State</label>
            <select className="form-select" id="validationCustom04" required>
                <option selected disabled value="">Choose...</option>
                <option>Iowa</option>
            </select>
            <div className="invalid-feedback">
                Please select a valid state.
            </div>
        </div>
        <div className="col-md-6">
            <label htmlFor="validationCustom05" className="form-label">Zip</label>
            <input type="text" className="form-control" id="validationCustom05" required/>
            <div className="invalid-feedback">
                Please provide a valid zip.
            </div>
        </div>

        <div className="col-12">
            <button className="btn btn-primary" type="submit">Done </button>
        </div>
    </form>
)


}

export default BillingAddress;
