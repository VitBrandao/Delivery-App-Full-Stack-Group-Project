import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Card({ price, image, name, id, setCustomerCart, customerCart }) {
  const [quantity, setQuantity] = useState(0);
  const itemCard = { id, name, image, price };
  const TEN = 10;

  useEffect(() => {
    const itemQuatity = customerCart.filter((item) => item.id === id).length;
    setQuantity(itemQuatity);
  }, [customerCart]);

  const addtoCart = (repeatNumber) => {
    const cart = [...customerCart];
    for (let index = 1; index <= repeatNumber; index += 1) {
      cart.push(itemCard);
    }
    setCustomerCart(cart);
  };

  const removeFromCart = (repeatNumber) => {
    const cart = [...customerCart];
    for (let index = 1; index <= repeatNumber; index += 1) {
      const indexOfItem = customerCart.findIndex((itemCart) => itemCart.id === id);
      cart.splice(indexOfItem, 1);
    }
    setCustomerCart(cart);
  };

  const updateItem = ({ target }) => {
    const targetToNumber = !target.value ? 0 : parseFloat(target.value, TEN);
    if (quantity < targetToNumber) {
      const difference = targetToNumber - quantity;
      addtoCart(difference);
    } else {
      const difference = quantity - targetToNumber;
      removeFromCart(difference);
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
          onClick={ () => removeFromCart(1) }
          disabled={ !quantity }
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
          onClick={ () => addtoCart(1) }
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
  setCustomerCart: PropTypes.func.isRequired,
  customerCart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
};

export default Card;
