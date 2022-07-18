import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fechPostLogin from '../helpers/post';
import { validateEmailAndPassword } from '../helpers/validateEmailAndPassword';

function LoginPage() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [messageError, setMessageError] = useState('');

  const history = useHistory();

  useEffect(() => {
    setButtonDisabled(validateEmailAndPassword(login.email, login.password));
  }, [login]);

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const postLogin = async () => {
    const fetch = await fechPostLogin(login, 'login');

    if (fetch.message) {
      setMessageError(fetch.message);
    }
    if (fetch.role === 'administrator') {
      history.push('/admin/manage');
    }
    if (fetch.role === 'seller') {
      history.push('/seller/orders');
    }
    if (fetch.role === 'customer') {
      history.push('/customer/products');
    }
  };

  const redirectToRegister = () => {
    history.push('/register');
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="login">
            Login
            <input
              id="login"
              type="text"
              name="email"
              value={ login.email }
              data-testid="common_login__input-email"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Senha
            <input
              id="password"
              type="password"
              data-testid="common_login__input-password"
              name="password"
              value={ login.password }
              onChange={ handleChange }
            />
          </label>
        </div>
        <div>
          <button
            type="button"
            data-testid="common_login__button-login"
            disabled={ buttonDisabled }
            onClick={ postLogin }
          >
            login
          </button>
          <div>
            <button
              type="button"
              data-testid="common_login__button-register"
              onClick={ redirectToRegister }
            >
              Ainda não tenho conta
            </button>
          </div>
        </div>
        <span
          data-testid="common_login__element-invalid-email"
          style={ messageError.length > 0 ? { opacity: 1 } : { opacity: 0 } }
        >
          {messageError}
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
