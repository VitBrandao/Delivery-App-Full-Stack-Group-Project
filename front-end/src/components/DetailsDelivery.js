import React, { useState, useEffect } from 'react';
import { getAll } from '../helpers/api/requests';

function DetailsDelivery() {
  const [users, setUsers] = useState([]);

  /*  const catchDataUser = () => {
const data = getItemLocalStorage();
setDataUser(data);
}; */

  const getUsers = async () => {
    const response = await getAll('users');
    const filterSeller = response.filter((user) => (user.role === 'seller'));
    setUsers(filterSeller);
  };

  useEffect(() => {
    // catchDataUser();
    getUsers();
  }, []);
  return (
    <div>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="select-seller">
          P.Vendedora Responsável
          <select>
            {
              users.map((user) => (
                <option
                  data-testid="customer_checkout__select-seller"
                  key={ user.id }
                >
                  {user.name}
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
          />
        </label>
        <label htmlFor="input-address">
          Número
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
          />
        </label>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
        >
          FINALIZAR PEDIDOS
        </button>
      </form>
    </div>
  );
}

export default DetailsDelivery;
