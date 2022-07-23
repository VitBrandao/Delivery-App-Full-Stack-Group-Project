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
    id: '',
  });

  const [sales, setSales] = useState([]);

  const catchDataUser = () => {
    const data = getItemLocalStorage('user');
    setDataUser(data);
  };

  const getUserSales = async () => {
    const data = getItemLocalStorage('user'); // ou estado dataUser
    const userId = data.id;
    const response = await getAll(`customer/orders/${userId}`);
    setSales(response);
  };

  const convertDate = (date) => {
    const newDate = date.split(/[- :]/);
    const day = newDate[2].slice(0, 2);
    const convertedDate = `${day}/${newDate[1]}/${newDate[0]}`;
    return convertedDate;
  };

  const history = useHistory();
  const redirectToDetails = (id) => {
    history.push(`/customer/orders/${id}`);
  };

  useEffect(() => {
    catchDataUser();
    getUserSales();
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
          key={ sale.id }
          type="button"
          onClick={ () => redirectToDetails(sale.id) }
        >
          <div>
            <p> Pedido </p>
            <p data-testid={ `customer_orders__element-order-id-${sale.id}` }>
              {`000${sale.id}`}
            </p>
          </div>
          <p data-testid={ `customer_orders__element-delivery-status-${sale.id}` }>
            {sale.status}
          </p>

          <p data-testid={ `customer_orders__element-order-date-${sale.id}` }>
            {convertDate(sale.saleDate)}
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
