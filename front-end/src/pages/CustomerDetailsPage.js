import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getItemLocalStorage } from '../helpers/localStorage';

function CustomerDetailsPage() {
  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    role: '',
    token: '',
    id: '',
  });

  const catchDataUser = () => {
    const data = getItemLocalStorage('user');
    setDataUser(data);
  };

  useEffect(() => {
    catchDataUser();
  }, []);

  return (
    <div>
      <Header
        buttonOne="Produtos"
        buttonTwo="Meus Pedidos"
        role={ dataUser.role }
        name={ dataUser.name }
        testId="customer_products__element-navbar-link-products"
        routeOne="/customer/products"
      />
    </div>
  );
}

export default CustomerDetailsPage;
