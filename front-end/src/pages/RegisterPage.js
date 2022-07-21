import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchPost } from '../helpers/api/requests';
import { validateRegister } from '../helpers/validate/validateEmailAndPassword';

function RegisterPage() {
  const [register, setRegister] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const [buttonDisable, setButtonDisabled] = React.useState(true);
  const [messageError, setMessageError] = React.useState('');

  const history = useHistory();

  function handleInput({ target: { name, value } }) {
    setRegister({ ...register, [name]: value });
  }

  const validateEmail = ({ email, password, name }) => {
    setButtonDisabled(validateRegister(name, email, password));
  };

  useEffect(() => {
    validateEmail(register);
  });

  const registerUser = async () => {
    const registerFetch = await fetchPost(register, 'register');
    if (registerFetch.message) {
      setMessageError(registerFetch.message);
    } else {
      history.push('/customer/products');
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
      <span
        data-testid="common_register__element-invalid_register"
        style={ messageError.length > 0 ? { opacity: 1 } : { opacity: 0 } }
      >
        { messageError }
      </span>
    </div>
  );
}

export default RegisterPage;
