import React, {useRef} from "react";
import ProductAPI from "../../services/ProductAPI";
import MyItem from "./MyItem";


export default function AddItem() {
    const newItemForm = useRef();


    const postDataHandler = () => {
        const form = newItemForm.current
        const data = {
            productName: form["productName"].value, description: form["description"].value,
            image: form["image"].value, price: form["price"].value, category: form["category"].value

        }

        ProductAPI.createProduct(data)
            .then(
                data => {
                    console.log("success:", data);
                }
            ).catch((error) => {
                console.error("error:", error);
            }
        )

    }


    return (
        <div className="card w-25 position-absolute top-50 start-50 translate-middle">
            <h1 className="card-header"> Add Item </h1>
            <form ref={newItemForm}>
                <div className="card-body text-start">
                    <label>Product Name: <input type="text" name={"productName"} className="mt-2 ms-2"/></label>
                    <label>Description: <textarea rows="4" name={"description"} className="mt-2 ms-2"/> </label>
                    <label>Image link: <input type="text" name={"image"} className="mt-2 ms-2"/>
                    </label>
                    <label>Price: <input type="number" min="1" step="0.5" name={"price"} className="mt-2 ms-2"/>
                    </label>
                    <div>
                        <label>Category: </label>
                        <select name={"category"} className="mt-2 ms-2">
                            <option value="Clothes">Clothes</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </div>
                </div>
            </form>

            <div>
                <button onClick={postDataHandler} className="mt-2 ">Add Post</button>
            </div>

        </div>


    )


}

