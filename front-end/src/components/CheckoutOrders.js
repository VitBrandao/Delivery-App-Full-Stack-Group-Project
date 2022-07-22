import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CheckoutOrders({ products, setProducts }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalCard = () => {
    const total = products
      .reduce((prev, current) => prev + parseFloat(current.subTotal), 0);
    setTotalPrice(total);
  };

  const deleteProduct = (index) => {
    const cloneArray = [...products];
    cloneArray.splice(index, 1);
    setProducts(cloneArray);
  };

  useEffect(() => {
    calculateTotalCard();
  }, [products]);

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
          {
            products.map((product, index) => (
              <tr
                key={ product.id }
              >

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
                  { product.name }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { product.quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { product.price.replace('.', ',') }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { product.subTotal.toFixed(2).replace('.', ',') }
                </td>
                <button
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={ () => deleteProduct(index) }
                >
                  Remover Item
                </button>
              </tr>
            ))
          }
        </tbody>
        <p
          data-testid="customer_checkout__element-order-total-price"
        >
          Total: R$
          {totalPrice}
        </p>
      </table>
    </div>
  );
}

CheckoutOrders.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default CheckoutOrders;
