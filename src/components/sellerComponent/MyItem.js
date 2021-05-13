import React from "react";
import Item from "../Item";
import SellerItem from "./SellerItem";


export default function () {

    return (

        <div className="container">
            <div className="row align-items-start ">
                {
                    ([1, 2, 3, 4, 5, 6, 7]).map(
                        i => <div className="col-4 mt-4">
                            <SellerItem/>
                        </div>
                    )
                }
            </div>
        </div>





    )


}