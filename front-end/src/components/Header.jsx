import React from 'react';
import PropTypes from 'prop-types';

function Header({textOne, textTwo, textThree}) {
  return (
    <header>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ (event) => handleChange(event) }
      >
        { textOne }
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ (event) => handleChange(event) }
      >
        { textTwo }
      </button>
      <span data-testid="customer_products__element-navbar-user-full-name">
        { textThree }
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ (event) => handleChange(event) }
      >
        Sair
      </button>
    </header>
  );
};

Header.propTypes = {
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string.isRequired,
  textThree: PropTypes.string.isRequired,
};

export default Header;