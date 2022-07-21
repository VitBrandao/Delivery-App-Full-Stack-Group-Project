import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Card({ price, image, name, id, setCustomerCart, customerCart }) {
  const [quantity, setQuantity] = useState(0);

  const changeCart = () => {
    const cart = [...customerCart];
    const searchItem = cart.find((itemCart) => itemCart.id === id);
    const itemCard = {
      id,
      name,
      image,
      price,
      quantity,
      subTotal: quantity * parseFloat(price),
    };

    if (!searchItem) {
      cart.push(itemCard);
    } else {
      const indexOfItem = customerCart.findIndex((itemCart) => itemCart.id === id);
      cart[indexOfItem] = itemCard;
    }
    if (itemCard.quantity === 0) {
      const indexOfItem = customerCart.findIndex((itemCart) => itemCart.id === id);
      cart.splice(indexOfItem, 1);
    }
    setCustomerCart(cart);
  };

  useEffect(() => {
    console.log('update');
    changeCart();
  }, [quantity]);

  const updateItem = ({ target }) => {
    const targetToNumber = !target.value ? 0 : parseFloat(target.value);
    setQuantity(targetToNumber);
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
          onClick={ () => setQuantity(quantity - 1) }
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
          onClick={ () => setQuantity(quantity + 1) }
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
