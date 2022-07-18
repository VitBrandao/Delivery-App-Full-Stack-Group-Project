import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CustomerProductsPage from '../pages/CustomerProductsPage';
import CustomerCheckoutPage from '../pages/CustomerCheckoutPage';
import CustomerOrdersPage from '../pages/CustomerOrdersPage';
import CustomerDetailsPage from '../pages/CustomerDetailsPage';
import SellerOrdersPage from '../pages/SellerOrdersPage';
import SellerDetailsPage from '../pages/SellerDetailsPage';
import AdminManagePage from '../pages/AdminManagePage';
import Home from '../pages/Home';
// import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ LoginPage } />
      <Route exact path="/register" component={ RegisterPage } />
      <Route exact path="/customer/products" component={ CustomerProductsPage } />
      <Route exact path="/customer/checkout" component={ CustomerCheckoutPage } />
      <Route exact path="/customer/orders" component={ CustomerOrdersPage } />
      <Route
        exact
        path="/customer/orders/:id"
        component={ CustomerDetailsPage }
      />
      <Route exact path="/seller/orders" component={ SellerOrdersPage } />
      <Route exact path="/seller/orders/:id" component={ SellerDetailsPage } />
      <Route exact path="/admin/manage" component={ AdminManagePage } />
      {/* <Route exact path="*" component={ NotFound } /> */}
    </div>
  );
}

export default Routes;
