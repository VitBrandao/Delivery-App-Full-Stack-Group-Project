import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getAll } from '../helpers/api/requests';
import { getItemLocalStorage } from '../helpers/localStorage';

function CustomerDetailsPage() {
  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    role: '',
    token: '',
    id: '',
  });

  const [sales, setSales] = useState([]);
  const [cart, setCart] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [date, setDate] = useState('');

  const catchDataUser = () => {
    const user = getItemLocalStorage('user');
    setDataUser(user);

    const cartItens = getItemLocalStorage('carrinho');
    setCart(cartItens);
  };

  const prefix = 'customer_order_details__';
  const params = useParams();

  const getUserSales = async () => {
    const data = getItemLocalStorage('user');
    const userId = data.id;
    const response = await getAll(`customer/orders/${userId}`);
    const orderIdParams = params.id;
    const findSale = response
      .find((r) => parseInt(r.id, 10) === parseInt(orderIdParams, 10));

    setSales(findSale);
    setDate(findSale.saleDate.split('T')[0].split('-').reverse().join('/'));

    const { sellerId } = response[0];
    const getUsers = await getAll('users');
    const findSeller = getUsers.find((user) => user.id === sellerId);
    const seller = findSeller.name;
    setSellerName(seller);
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
        routeTwo="/customer/orders"
      />

      <p>Detalhe do Pedido</p>

      <div className="detailsOfSale" key={ sales.id }>
        <p> Pedido </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`000${sales.id}`}
        </p>

        <label
          data-testid="customer_order_details__element-order-details-label-seller-name"
          htmlFor={ `${prefix}element-order-details-label-seller-name` }
        >
          P. Vend:
          <p
            data-testid={ `${prefix}element-order-details-label-seller-name` }
          >
            {sellerName}
          </p>
        </label>

        <p data-testId="customer_order_details__element-order-details-label-order-date">
          { date }
        </p>

        <label
          data-testId={ `${prefix}element-order-details-label-delivery-status` }
          htmlFor="orderStatus"
        >
          <p className="orderStatus">
            {sales.status}
          </p>
        </label>

        <button
          type="button"
          data-testId="customer_order_details__button-delivery-check"
          disabled
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((cartItem, index) => (
              <tr
                key={ cartItem.id }
              >

                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                >
                  {cartItem.name}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {cartItem.quantity}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {cartItem.price.replace('.', ',')}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {cartItem.subTotal.toFixed(2).replace('.', ',')}
                </td>
              </tr>
            ))
          }
        </tbody>
        <button
          type="button"
          data-testId="customer_order_details__element-order-total-price"
        >
          Total: R$
          <p>
            {cart.reduce((acc, crr) => acc
              + (crr.price * crr.quantity), 0)
              .toFixed(2).replace('.', ',')}
          </p>
        </button>
      </table>
    </div>
  );
}

export default CustomerDetailsPage;
