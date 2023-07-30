import { BASE_URL } from './utils';

class Api {
  constructor(BASE_URL) {
    this.baseUrl = BASE_URL;
  }

  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(`${this.baseUrl}${url}`, options).then(this._checkAnswer);
  }

  getUserInfo() {
    return this._request('/users/me', {
      credentials: 'include',
    });
  }

  setUserInfo({ name, about }) {
    return this._request('/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  getInitialCards() {
    return this._request('/cards', {
      credentials: 'include',
    });
  }

  addCard({ name, link }) {
    return this._request('/cards', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  _addLikeCard(id) {
    return this._request(`/cards/${id}/likes`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  _deleteLikeCard(id) {
    return this._request(`/cards/${id}/likes`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  toggleLikeCard(cardId, isLiked) {
    if (isLiked) {
      return this._deleteLikeCard(cardId);
    } else {
      return this._addLikeCard(cardId);
    }
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  }

  updateAvatar({ avatar }) {
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    });
  }
}

const api = new Api(BASE_URL);

export default api;
