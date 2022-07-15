import React, { useEffect } from 'react';
import fetchRegister from '../util/fetchRegister';

function RegisterPage() {
  const [register, setRegister] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const [buttonDisable, setButtonDisabled] = React.useState(true);

  function handleInput({ target: { name, value } }) {
    setRegister({ ...register, [name]: value });
  }

  useEffect(() => {
    validateEmail(register)
  })

  const registerUser = async () => {
    const registerFetch = await fetchRegister(register);
    console.log(registerFetch);
    return registerFetch
  }

  

  const validateEmail = ({ email, password, name }) => {
    const validName = name.length > 12;
    const SIX = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(email);
    const validPassword = password.length >= SIX;
    if (validEmail && validPassword && validName) {
    setButtonDisabled(false);
    } else {
    setButtonDisabled(true);
    }
    }; 

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
        disabled={ buttonDisable }
        onClick={ registerUser }
      >
        CADASTRAR
      </button>
    </div>
  );
}

export default RegisterPage;
