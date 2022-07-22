import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { getAll } from '../helpers/api/requests';
import { getItemLocalStorage } from '../helpers/localStorage';

function CustomerOrdersPage() {
  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    role: '',
    token: '',
  });

  const [sales, setSales] = useState([]);

  const catchDataUser = () => {
    const data = getItemLocalStorage('user');
    setDataUser(data);
  };

  const getSales = async (id) => {
    const response = await getAll(`customer/orders/${id}`);
    setSales(response);
    console.log(response);
  };

  const getUsers = async () => {
    const users = await getAll('users');
    const data = getItemLocalStorage('user');
    const findUser = users.find((user) => user.email === data.email);

    getSales(findUser.id);
  };

  const history = useHistory();
  const redirectToDetails = (id) => {
    history.push(`/customer/orders/${id}`);
  };

  useEffect(() => {
    catchDataUser();
    getUsers();
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
      {sales.map((sale) => (
        <button
          key={ sale.userId }
          type="button"
          onClick={ () => redirectToDetails(sale.id) }
        >
          <div>
            <p> Pedido </p>
            <p data-testid={ `customer_orders__element-order-id-${sale.id}` }>
              {sale.deliveryNumber}
            </p>
          </div>
          <p data-testid={ `customer_orders__element-delivery-status-${sale.id}` }>
            {sale.status}
          </p>

          <p data-testid={ `customer_orders__element-order-date-${sale.id}` }>
            {sale.saleDate}
          </p>

          <div>
            <p>
              R$
            </p>
            <p data-testid={ `customer_orders__element-card-price-${sale.id}` }>
              {sale.totalPrice.replace('.', ',')}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default CustomerOrdersPage;
