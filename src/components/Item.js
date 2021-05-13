import React from "react";
import Review from "./Review";

export default function Item(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.price} $</p>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Reviews
                                </button>
                            </h2>


                            <Review></Review>
                        </div>
                    </div>
                    <a href="/" className="btn btn-primary mt-2">Add to cart</a>
                </div>
        </div>
    );
}