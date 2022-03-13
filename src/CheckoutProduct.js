import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton, addBasket }, ref) => {
    const [dispatch] = useStateValue();

    const removeFromBasket = () => {
      //remove the item from basket
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };

    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          image: image,
          price: price,
          rating: rating,
          title: title,
        },
      });
    };
    return (
      <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
            <Link to={`/product-details?id=${id}`}>{title}</Link>{" "}
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={"rating" + i}>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
          {addBasket && <button onClick={addToBasket}>Add to Basket</button>}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
