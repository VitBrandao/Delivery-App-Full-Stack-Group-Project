import React from "react";
import PropTypes from "prop-types";

function Card({ price, image, name, id }) {
  return (
    <div>
      <span data-testid={`customer_products__element-card-price-${id}`}>
        {" "}
        {price}{" "}
      </span>
      <img
        data-testid={`customer_products__img-card-bg-image-${id}`}
        src={image}
        alt={name}
      />
      <span data-testid={`customer_products__element-card-title-${id}`}>
        {" "}
        {name}{" "}
      </span>
      <span>
        <button data-testid={`customer_products__button-card-rm-item-${id}`}>
          {" "}
          -{" "}
        </button>
        <span data-testid={`customer_products__input-card-quantity-${id}`}>
          {" "}
          0{" "}
        </span>
        <button data-testid={`customer_products__button-card-add-item-${id}`}>
          {" "}
          +{" "}
        </button>
      </span>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
