import React, { useState } from 'react';

function LoginPage() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const validateEmail = (email, password) => {
    const SIX = 5;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validEmail = emailRegex.test(email);
    const validPassword = password.length >= SIX;

    if (validEmail && validPassword) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
    validateEmail(login.email, login.password);
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
          >
            login
          </button>
          <div>
            <button
              type="button"
              data-testid="common_login__button-register"
            >
              Ainda não tenho conta
            </button>
          </div>
        </div>
        <p data-testid="common_login__element-invalid-email">Elemento oculto</p>
      </div>
    </div>
  );
}

export default LoginPage;
