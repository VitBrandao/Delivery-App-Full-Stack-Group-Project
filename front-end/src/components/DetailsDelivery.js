import React from "react";

function DetailsDelivery() {
return(
<div>
  <h1>Detalhes e Endereço para Entrega</h1>
  <form>
    <label htmlFor="select-seller">
      P.Vendedora Responsável
      <select
      >
        <option data-testid="customer_checkout__select-seller">????</option>
      </select>
    </label>
    <label htmlFor="input-address">
      Endereço
      <input
      data-testid="customer_checkout__input-address"
      type="text"
      />
    </label>
    <label>
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