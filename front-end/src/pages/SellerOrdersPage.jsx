import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { fetchPost } from '../helpers/api/requests';
import { getItemLocalStorage } from '../helpers/localStorage';

function SellerOrdersPage() {
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
    const data = getItemLocalStorage('user');
    const sellerId = data.id;
    const sellerToken = data.token;
    const response = await fetchPost({ id: sellerId }, 'seller/orders', sellerToken);
    console.log(response);
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
    history.push(`/seller/orders/${id}`);
  };

  useEffect(() => {
    catchDataUser();
    getUserSales();
  }, []);

  return (
    <div>
      <Header
        buttonOne="Pedidos"
        routeOne="/seller/orders"
        role={ dataUser.role }
        name={ dataUser.name }
        testId="customer_products__element-navbar-link-orders"
      />
      {sales.map((sale) => (
        <button
          key={ sale.id }
          type="button"
          onClick={ () => redirectToDetails(sale.id) }
        >
          <div>
            <p> Pedido </p>
            <p data-testid={ `seller_orders__element-order-id-${sale.id}` }>
              {`000${sale.id}`}
            </p>
          </div>
          <p data-testid={ `seller_orders__element-delivery-status-${sale.id}` }>
            {sale.status}
          </p>

          <p data-testid={ `seller_orders__element-order-date-${sale.id}` }>
            {convertDate(sale.saleDate)}
          </p>

          <div>
            <p>
              R$
            </p>
            <p data-testid={ `seller_orders__element-card-price-${sale.id}` }>
              {sale.totalPrice.replace('.', ',')}
            </p>
          </div>

          <p data-testid={ `seller_orders__element-card-address-${sale.id}` }>
            {`${sale.deliveryAddress}, ${sale.deliveryNumber}`}
          </p>
        </button>
      ))}
    </div>
  );
}

export default SellerOrdersPage;
