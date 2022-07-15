import React from 'react';

function RegisterPage() {
  const [register, setRegister] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  function handleInput({ target: { name, value } }) {
    setRegister({ ...register, [name]: value });
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            data-testid="common_register__input-name"
            type="text"
            name="name"
            placeholder="Seu nome"
            value={ register.name }
            onChange={ handleInput }
          />
        </label>
        <label htmlFor="input-email">
          Email
          <input
            data-testid="common_register__input-email"
            type="text"
            name="email"
            placeholder="seu-email@site.com.br"
            value={ register.email }
            onChange={ handleInput }
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            data-testid="common_register__input-password"
            type="password"
            name="password"
            placeholder="*******"
            value={ register.password }
            onChange={ handleInput }
          />
        </label>
      </form>
      <button
        data-testid="common_register__button-register"
        type="button"
      >
        CADASTRAR
      </button>
    </div>
  );
}

export default RegisterPage;
