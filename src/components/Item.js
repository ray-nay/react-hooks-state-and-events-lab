import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] =useState(false);

  function handleCart(){
    setInCart(inCart=>!inCart)
  }
  const cartClass = inCart? "Remove from cart": "Add to cart"
  const classNameLi= inCart? "in-cart":""
  return (
    <li className= {classNameLi}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cartClass}</button>
    </li>
  );
}

export default Item;
