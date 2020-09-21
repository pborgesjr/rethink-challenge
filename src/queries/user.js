import { toast } from 'react-toastify';

import rethinkAPI from '~/services/rethinkAPI';
import history from '~/services/history';

export const login = async ({ username, password }) => {
  try {
    const response = await rethinkAPI.post('/login', {
      username,
      password,
    });

    localStorage.setItem(
      'user',
      JSON.stringify({
        user: response.data.user,
        token: response.data.token,
      })
    );

    history.push('/home');
  } catch (err) {
    toast.error('Por favor, insira os dados corretamente!');
  }
};

export const logout = () => {
  try {
    localStorage.removeItem('user');
    history.push('/');
  } catch (err) {
    toast.error('Erro ao tentar realizar logout!');
  }
};
