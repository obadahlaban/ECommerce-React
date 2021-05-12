import React, {useContext} from "react";
import {APIConfig} from "../app/API-Config";
import Item from "../components/Item";


const Items = () => {
   const APIs= useContext(APIConfig);
    return (
        <div className="container redBorder">
            <div className="row align-items-start ">
                {
                    ([1, 2, 3, 4, 5, 6, 7]).map(
                        i => <div className="col-4 mt-4">
                            <Item/>
                        </div>
                    )
                }
            </div>
        </div>



    )

}

export default Items;