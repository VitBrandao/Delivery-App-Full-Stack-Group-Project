import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getItemLocalStorage } from '../helpers/localStorage';
import CheckoutOrders from '../components/CheckoutOrders';
import DetailsDelivery from '../components/DetailsDelivery';

function CustomerCheckoutPage() {
  const [user, setUser] = useState({
    name: '', email: '', role: '', token: '',
  });

  const catchDataUser = () => {
    const data = getItemLocalStorage();
    setUser(data);
  };

  useEffect(() => {
    catchDataUser();
  }, []);

  return (
    <div>
      <Header
        buttonOne="PRODUTOS"
        buttonTwo="MEUS PEDIDOS"
        role={ user.role }
        name={ user.name }
      />
      <CheckoutOrders />
      <DetailsDelivery />
    </div>
  );
}

export default CustomerCheckoutPage;
