import React from "react";
import "./cart-item-styles.css";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { addToCart, reduceItemFromCart, removeItemFromCart } from "../../redux/actions/cartAction";

//CartItem component
const CartItem = ({ item: { image, price, name, noAddedToCart, stock }, item, }) => {

  const dispatch = useDispatch();

  return (
    <div className="cart-item" style={{ fontSize: "11px" }}>
      <img src={image} alt="imag" style={{ width: "20%" }} />
      <div className="item-details">
        <div className="row" style={{ width: "100%", margin: "auto" }}>
          <div className="col-5">
            <span className="name" style={{ fontSize: "11px" }}>
              {name}
            </span>
          </div>
          {noAddedToCart !== stock ? (
            <div className="col-1 cart-item-icon-container" onClick={() => dispatch(addToCart(item))} >
              <BsPlusCircle className="cart-item-icon"   />
            </div>
          ) : (
            <div className="col-1 cart-item-icon-container"  >
              <BsPlusCircle className="cart-item-icon-dark" />
            </div>
          )}
          <div className="col-1 cart-item-icon-container" >
            {noAddedToCart}
          </div>
          <div className="col-1 cart-item-icon-container" style={{paddingLeft: "5px"}} onClick={() => dispatch(reduceItemFromCart(item))} >
            <BsDashCircle className="cart-item-icon" />
          </div>
          <div className="col-2" style={{paddingLeft: "38px"}}  onClick={() => dispatch(removeItemFromCart(item))}>
            <FaTrashAlt className="cart-item-icon" />
          </div>
        </div>
        <div className="row" style={{ width: "100%", margin: "auto" }}>
          <div className="col-4">
            <span className="name" style={{ fontSize: "11px" }}>
              Qty: {noAddedToCart}
            </span>
          </div>
          <div className="col-7" style={{ textAlign: "right" }}>
            <span className="price" style={{ fontSize: "11px", color: "#28a745" }}>
              LKR {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
