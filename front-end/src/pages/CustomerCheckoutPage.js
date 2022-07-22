import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getItemLocalStorage, setItemLocalStorage } from '../helpers/localStorage';
import CheckoutOrders from '../components/CheckoutOrders';
import DetailsDelivery from '../components/DetailsDelivery';
import { fetchPost } from '../helpers/api/requests';

function CustomerCheckoutPage() {
  const [user, setUser] = useState({
    name: '', email: '', role: '', token: '',
  });

  const [products, setProducts] = useState([]);

  const catchProducts = () => {
    const data = getItemLocalStorage('carrinho');
    setProducts(data);
  };

  const catchDataUser = () => {
    const data = getItemLocalStorage('user');
    setUser(data);
  };

  // refatorar fetch com o userId

  const registerNewSale = async () => {
    setItemLocalStorage('carrinho', products);
    await fetchPost({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'pendente',
      products,
    }, 'sales');
  };

  useEffect(() => {
    catchDataUser();
    catchProducts();
  }, []);

  return (
    <div>
      <Header
        buttonOne="PRODUTOS"
        buttonTwo="MEUS PEDIDOS"
        role={ user.role }
        name={ user.name }
        testId="customer_products__element-navbar-link-checkout"
      />
      <CheckoutOrders
        products={ products }
        setProducts={ setProducts }
      />
      <DetailsDelivery />
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ registerNewSale }
      >
        FINALIZAR PEDIDOS
      </button>
    </div>
  );
}

export default CustomerCheckoutPage;
