import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeItemLocalStorage } from '../helpers/localStorage';

function Header({ buttonOne, buttonTwo, role, name, testId, routeOne, routeTwo }) {
  const history = useHistory();
  const redirectToOrders = () => {
    history.push(routeTwo);
  };

  const redirectToProducts = () => {
    history.push(routeOne);
  };

  return (
    <header data-testid={ testId }>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ redirectToProducts }
      >
        { buttonOne }
      </button>

      {
        role === 'customer' && (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ redirectToOrders }
          >
            { buttonTwo }
          </button>
        )
      }

      <span data-testid="customer_products__element-navbar-user-full-name">
        { name }
      </span>

      <Link
        to="/login"
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
  routeOne: PropTypes.string.isRequired,
  routeTwo: PropTypes.string.isRequired,
};

export default Header;
