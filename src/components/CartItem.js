import React, {useContext} from "react";


const CartItem = (props) => {
  return (
      <div className="row border-top border-bottom">
          <div className="row main align-items-center">
              <div className="col-2"><img className="img-fluid" src={props.image} alt="image"/></div>
              <div className="col">
                  <div className="row text-muted">{props.category}</div>
                  <div className="row">{props.productName}</div>
              </div>
              <div className="col"><a href="">-</a><a href="" className="border">1</a><a href="">+</a>
              </div>
              <div className="col">$ {props.price} <span className="close">&#10005;</span></div>
          </div>
      </div>

)


}

export default CartItem;