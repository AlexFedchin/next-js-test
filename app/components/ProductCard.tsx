import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="p-4 my-4 bg-sky-600 text-white text-xl hover:bg-sky-700">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
