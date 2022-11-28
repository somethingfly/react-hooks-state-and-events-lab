import React, { useState } from "react";

function Item({ name, category }) {

  const [isCart, setIsCart] = useState(false);

  function handleClick() {
    setIsCart((appClass) => !appClass);
    return
  }

  const appClass = isCart ? "in-cart" : "";

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
