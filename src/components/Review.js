import React, {useState} from "react";

const Review = (props) => {
    return (

        <div className="accordion" id={"accordionExample" + props.id}>
            <div className="accordion-item">
                <h2 className="accordion-header" id={"heading" + props.id}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target={"#collapse" + props.id} aria-expanded="false"
                            aria-controls={"collapse" + props.id}>

                        Reviews
                    </button>
                </h2>
                <div id={"collapse" + props.id} className="accordion-collapse collapse"
                     aria-labelledby={"heading" + props.id}
                     data-bs-parent={"#accordionExample" + props.id}>

                    <div className="accordion-body">
                        <button type="button" className="btn btn-secondary mt-2 ms-auto d-block" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
                            Add Review
                        </button>

                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                             data-bs-keyboard="false"
                             tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Add Review</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <textarea className="w-100" rows="4">Type here</textarea>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="list-group text-start mt-2 ">
                            {props.product.reviews.map(review => {
                                return (
                                    <li className="text-secondary list-group-item">
                                        <b>{review.reviewer_name}:</b> {review.review}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Review;