import React from 'react';

function LoginPage() {
  return (
    <div>
      <div>
        <div>
          <label htmlFor="login">Login</label>
          <input id="login" type="text" data-testid="common_login__input-email"/>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" data-testid="common_login__input-password"/>
        </div>
        <div>
          <button data-testid="common_login__button-login">login</button>
          <button data-testid="common_login__button-register">Ainda não tenho conta</button>
        </div>
        <p data-testid="common_login__element-invalid-email">Elemento oculto</p>
      </div>
    </div>
  );
}

export default LoginPage;
