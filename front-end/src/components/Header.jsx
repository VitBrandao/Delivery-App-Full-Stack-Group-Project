import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeItemLocalStorage } from '../helpers/localStorage';

function Header({ buttonOne, buttonTwo, role, name, testId }) {
  return (
    <header data-testid={ testId }>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        { buttonOne }
      </button>

      {
        role === 'customer' && (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            { buttonTwo }
          </button>
        )
      }

      <span data-testid="customer_products__element-navbar-user-full-name">
        { name }
      </span>

      <Link
        href="/login"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => removeItemLocalStorage('user') }
      >
        Sair
      </Link>
    </header>
  );
}

Header.defaultProps = {
  buttonTwo: '',
};

Header.propTypes = {
  buttonOne: PropTypes.string.isRequired,
  buttonTwo: PropTypes.string,
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Header;
