import React from "react";

const BillingInformation = () => {

    const clickHandler = {
        //add card information  to the back-end
    }

    return (


        <form className="row g-3 needs-validation">
            <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">Card Number</label>
                <input type="text" className="form-control" id="validationCustom02" required/>
                <div className="invalid-feedback">
                    Please provide Card Number.
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom03" className="form-label">Cardholder Name </label>
                <input type="text" className="form-control" id="validationCustom03" required/>
                <div className="invalid-feedback">
                    Please provide Cardholder Name.
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom03" className="form-label">cvc </label>
                <input type="text" className="form-control" id="validationCustom03" required/>
                <div className="invalid-feedback">
                    Please provide cvc.
                </div>
            </div>

            <div className="col-md-6">
                <label htmlFor="validationCustom05" className="form-label">Expiry Date</label>
                <input type="date" className="form-control" id="validationCustom05" required/>
                <div className="invalid-feedback">
                    Please provide a expiry date.
                </div>
            </div>

            <div className="col-12">
                <button className="btn btn-primary" onClick={clickHandler}  >Done </button>
            </div>
        </form>
    )


}

export default BillingInformation;
