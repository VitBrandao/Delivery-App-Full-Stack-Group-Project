import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { getItemLocalStorage } from '../helpers/localStorage';
import Card from '../components/Card';
import { getAll } from '../helpers/api/requests';

function CustomerProductsPage() {
  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    role: '',
    token: '',
  });
  const [products, setProducts] = useState([]);

  const catchDataUser = () => {
    const data = getItemLocalStorage();
    setDataUser(data);
  };

  const allProducts = async () => {
    const response = await getAll('products');
    console.log(response);
    setProducts(response);
  };

  useEffect(() => {
    catchDataUser();
    allProducts();
  }, []);

  return (
    <div>
      <Header
        buttonOne="Produtos"
        buttonTwo="Meus Pedidos"
        role={ dataUser.role }
        name={ dataUser.name }
      />
      {products.map((product) => (
        <Card
          key={ product.id }
          price={ product.price }
          name={ product.name }
          image={ product.urlImage }
          id={ product.id }
        />
      ))}
    </div>
  );
}

export default CustomerProductsPage;
