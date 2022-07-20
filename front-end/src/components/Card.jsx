import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card({ price, image, name, id, totalPrice, setTotalPrice }) {
  const [quantity, setQuantity] = useState(0);
  // const [customerCart, setCustomerCart] = useState([]);
  const TEN = 10;
  const addItem = () => {
    const increase = (parseInt(quantity, TEN) + 1);
    setQuantity(increase);

    const addTotalPrice = totalPrice + parseFloat(price, TEN);
    setTotalPrice(addTotalPrice);
  };

  const removeItem = () => {
    if (quantity !== 0) {
      const decrease = quantity < 1 ? 0 : (parseInt(quantity, TEN) - 1);
      setQuantity(decrease);

      const subTotalPrice = totalPrice < 1 ? 0 : (
        totalPrice - (parseFloat(price, TEN))
      );

      setTotalPrice(subTotalPrice);
    }
  };

  const updateItem = ({ target }) => {
    console.log(`quantity: ${quantity}`);
    console.log(`value:${target.value}`);

    const targetToNumber = parseFloat(target.value, TEN);
    if (quantity < targetToNumber) {
      const difference = targetToNumber - quantity;
      const addTotalPrice = totalPrice + (difference * parseFloat(price, TEN));
      setTotalPrice(addTotalPrice);
    } else {
      const difference = quantity - targetToNumber;
      const subTotalPrice = totalPrice < 1 ? 0 : (
        totalPrice - (difference * parseFloat(price, TEN))
      );

      setTotalPrice(subTotalPrice);
    }

    setQuantity(target.value);
  };

  return (
    <div className="customerProductsCard">
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        {`R$ ${price.replace('.', ',')}`}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ name }
        className="productImage"
      />
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        {' '}
        {name}
        {' '}
      </span>
      <span>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ removeItem }
        >
          {' '}
          -
          {' '}
        </button>

        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          value={ quantity }
          onChange={ updateItem }
        />

        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ addItem }
        >
          {' '}
          +
          {' '}
        </button>
      </span>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
};

export default Card;
