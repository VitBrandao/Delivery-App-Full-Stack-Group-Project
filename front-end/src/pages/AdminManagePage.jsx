import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { fetchPost } from '../helpers/api/requests';
import { validateRegister } from '../helpers/validate/validateEmailAndPassword';
import { getItemLocalStorage } from '../helpers/localStorage';

function AdminManagePage() {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seller',
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [messageError, setMessageError] = useState('');
  const [dataUser, setDataUser] = useState({
    name: '', email: '', role: '', token: '',
  });

  const catchDataUser = () => {
    const data = getItemLocalStorage('user');
    setDataUser(data);
  };

  const validateEmail = ({ email, password, name }) => {
    setButtonDisabled(validateRegister(name, email, password));
  };

  useEffect(() => {
    catchDataUser();
  }, []);

  useEffect(() => {
    validateEmail(newUser);
  });

  const handleChangeNewUser = ({ target: { name, value } }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const registerNewUser = async () => {
    const sendNewUser = await fetchPost(newUser, 'admin/manage', dataUser.token);
    if (sendNewUser.message) setMessageError(sendNewUser.message);
  };

  return (
    <div>
      <Header
        buttonOne="Gerenciar Usuários"
        role={ dataUser.role }
        name={ dataUser.name }
      />
      <form>
        <label htmlFor="admin-input-name">
          Nome
          <input
            name="name"
            id="admin-input-name"
            type="text"
            data-testid="admin_manage__input-name"
            value={ newUser.name }
            onChange={ handleChangeNewUser }
          />
        </label>
        <label htmlFor="admin-input-email">
          Email
          <input
            name="email"
            id="admin-input-email"
            type="text"
            data-testid="admin_manage__input-email"
            value={ newUser.email }
            onChange={ handleChangeNewUser }
          />
        </label>
        <label htmlFor="admin-input-password">
          Senha
          <input
            name="password"
            id="admin-input-password"
            type="password"
            data-testid="admin_manage__input-password"
            value={ newUser.password }
            onChange={ handleChangeNewUser }
          />
        </label>
        <label htmlFor="select-role">
          Tipo
          <select
            id="select-role"
            name="role"
            data-testid="admin_manage__select-role"
            value={ newUser.role }
            onChange={ handleChangeNewUser }
          >
            <option>
              seller
            </option>
            <option>
              customer
            </option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ buttonDisabled }
          onClick={ registerNewUser }
        >
          CADASTRAR
        </button>
        <span
          data-testid="admin_manage__element-invalid-register"
          style={ messageError.length > 0 ? { opacity: 1 } : { opacity: 0 } }
        >
          { messageError }
        </span>
      </form>
    </div>
  );
}

export default AdminManagePage;
