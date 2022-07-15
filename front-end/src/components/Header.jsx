import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getItemLocalStorage } from '../helpers/localStorage';

function Header({ textOne, textTwo }) {
  const [dataUser, setDataUser] = useState({
    name: '', email: '', role: '', token: '',
  });

  const catchDataUser = () => {
    const data = getItemLocalStorage();
    setDataUser(data);
  };

  useEffect(() => {
    catchDataUser();
  }, []);

  return (
    <header>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        { textOne }
      </button>
      {
        dataUser.role === 'customer' && (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            { textTwo }
          </button>
        )
      }
      <span data-testid="customer_products__element-navbar-user-full-name">
        { dataUser.name }
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </header>
  );
}

Header.defaultProps = {
  textTwo: '',
};
Header.propTypes = {
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string,
};

export default Header;
