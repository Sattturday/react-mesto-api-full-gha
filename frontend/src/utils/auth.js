import { BASE_URL } from './utils';

const _checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const _request = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options).then(_checkAnswer);
};

export const register = ({ email, password }) => {
  return _request('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

export const login = ({ email, password }) => {
  return _request('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

export const checkToken = () => {
  const token = localStorage.getItem('token');

  return _request('/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
