import React from "react";


export default function AddItem() {

    const postDataHandler = () => {

    }


    return (
        <div className="card w-25 position-absolute top-50 start-50 translate-middle">
            <h1 className="card-header"> Add Item </h1>
            <div className="card-body">
                <div>
                    <label>Product Name: </label>
                    <input type="text" className="mt-2 ms-2"/>
                </div>
                <div>
                    <label >Description: </label>
                    <textarea rows="4" className="mt-2 ms-2"/>
                </div>
                <label>Image link: </label>
                <input className="mt-2 ms-2"/>
            </div>
            <div>
                <label>Price: </label>
                <input type="text" className="mt-2 ms-2"/>
            </div>
            <div>
                <label>Category: </label>
                <select className="mt-2 ms-2">
                    <option value="Clothes">Clothes</option>
                    <option value="Electronics">Electronics</option>
                </select>
            </div>
            <div>
                <button onClick={postDataHandler} className="mt-2 ">Add Post</button>
            </div>

        </div>


    )


}

