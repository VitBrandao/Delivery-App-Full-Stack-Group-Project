import React from 'react';
import PropTypes from 'prop-types';

function CheckoutOrders({ unitPrice, description, quantity, subTotal, index }) {
  return (
    <div>
      <h1>Finalizar Pedido</h1>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
            <td>Remover Item</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-name-${index}`
              }
            >
              { description }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
            >
              { quantity }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
            >
              { unitPrice }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              { subTotal }
            </td>
            <button
              type="button"
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              Remover Item
            </button>
          </tr>
        </tbody>
        <p data-testid="customer_checkout__element-order-total-price">Total: R$ 0</p>
      </table>
    </div>
  );
}

CheckoutOrders.propTypes = {
  description: PropTypes.string.isRequired,
  unitPrice: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutOrders;
