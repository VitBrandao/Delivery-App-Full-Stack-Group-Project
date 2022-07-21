import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { setItemLocalStorage, getItemLocalStorage } from '../helpers/localStorage';
import { getAll } from '../helpers/api/requests';
import Header from '../components/Header';
import Card from '../components/Card';

function CustomerProductsPage() {
  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    role: '',
    token: '',
  });
  const TEN = 10;

  const [products, setProducts] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [customerCart, setCustomerCart] = useState([]);

  const catchDataUser = () => {
    const data = getItemLocalStorage('user');
    setDataUser(data);
  };

  const allProducts = async () => {
    const response = await getAll('products');
    setProducts(response);
  };

  const history = useHistory();

  const redirectToCheckout = () => {
    setItemLocalStorage('carrinho', customerCart);
    history.push('/customer/checkout');
  };

  const calculateTotalCard = () => {
    const total = customerCart
      .reduce((prev, current) => prev + parseFloat(current.price, TEN), 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    catchDataUser();
    allProducts();
  }, []);

  useEffect(() => {
    calculateTotalCard();
  }, [customerCart]);

  return (
    <div>
      <Header
        buttonOne="Produtos"
        buttonTwo="Meus Pedidos"
        role={ dataUser.role }
        name={ dataUser.name }
        testId="customer_products__element-navbar-link-products"
      />

      <div className="allCustomerProducts">
        {products.map((product) => (
          <Card
            key={ product.id }
            price={ product.price }
            name={ product.name }
            image={ product.urlImage }
            id={ product.id }
            setCustomerCart={ setCustomerCart }
            customerCart={ customerCart }
          />
        ))}
      </div>

      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ redirectToCheckout }
        disabled={ totalPrice <= 0 }
      >
        Ver Carrinho: R$
        <p data-testid="customer_products__checkout-bottom-value">
          { totalPrice.toFixed(2).replace('.', ',') }
        </p>
      </button>
    </div>
  );
}

export default CustomerProductsPage;
