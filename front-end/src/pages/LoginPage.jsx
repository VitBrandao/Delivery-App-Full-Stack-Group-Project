import React from 'react';

function LoginPage() {
  return (
    <div>
      <div>
        <div>
          <label htmlFor="login">
            Login
            <input
              id="login"
              type="text"
              data-testid="common_login__input-email"
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
            />
          </label>
        </div>
        <div>
          <button
            type="button"
            data-testid="common_login__button-login"
          >
            login
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </div>
        <p data-testid="common_login__element-invalid-email">Elemento oculto</p>
      </div>
    </div>
  );
}

export default LoginPage;
