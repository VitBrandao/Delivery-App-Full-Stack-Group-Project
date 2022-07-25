import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { getItemLocalStorage, setItemLocalStorage } from '../helpers/localStorage';
import CheckoutOrders from '../components/CheckoutOrders';
import { fetchPost, getAll } from '../helpers/api/requests';

function CustomerCheckoutPage() {
  const history = useHistory();

  const [user, setUser] = useState({
    name: '', email: '', role: '', token: '',
  });

  const [sellers, setSellers] = useState([]);

  const [products, setProducts] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalCard = () => {
    const total = products
      .reduce((prev, current) => prev + parseFloat(current.subTotal), 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalCard();
  }, [products]);

  const [deliveryInfo, setDeliveryInfo] = useState({
    sellerName: 'Fulana Pereira',
    sellerId: 2,
    address: '',
    number: '',
  });

  const getSellers = async () => {
    const response = await getAll('users');
    const filterSeller = response.filter((seller) => (seller.role === 'seller'));
    setSellers(filterSeller);
  };

  const catchProducts = () => {
    const data = getItemLocalStorage('carrinho');
    setProducts(data);
  };

  const catchDataUser = () => {
    const data = getItemLocalStorage('user');
    setUser(data);
  };

  const registerNewSale = async () => {
    const arrayProducts = [];

    products.map((product) => (
      arrayProducts.push({ productId: product.id, quantity: product.quantity })
    ));

    setItemLocalStorage('carrinho', products);
    const response = await fetchPost({
      userId: user.id,
      sellerId: deliveryInfo.sellerId,
      totalPrice,
      deliveryAddress: deliveryInfo.address,
      deliveryNumber: deliveryInfo.number,
      status: 'Pendente',
      products: arrayProducts,
    }, 'sales', user.token);
    console.log(response);
    history.push(`orders/${response}`);
  };

  const handleInput = ({ target }) => {
    if (target.name === 'sellerName') {
      const infoSeller = sellers.find((seller) => seller.name === target.value);
      setDeliveryInfo({
        ...deliveryInfo, [target.name]: target.value, sellerId: infoSeller.id });
    } else {
      setDeliveryInfo({ ...deliveryInfo, [target.name]: target.value });
    }
  };

  useEffect(() => {
    catchDataUser();
    catchProducts();
    getSellers();
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
        totalPrice={ totalPrice }
      />
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="select-seller">
          P.Vendedora Responsável
          <select
            data-testid="customer_checkout__select-seller"
            onChange={ handleInput }
            value={ deliveryInfo.sellerName }
            name="sellerName"
          >
            {
              sellers.map((seller) => (
                <option
                  key={ seller.id }
                >
                  {seller.name}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="input-address">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            onChange={ handleInput }
            name="address"
            value={ deliveryInfo.address }
          />
        </label>
        <label htmlFor="input-address">
          Número
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            onChange={ handleInput }
            value={ deliveryInfo.number }
            name="number"
          />
        </label>
      </form>
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
