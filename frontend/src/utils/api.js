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
    const token = localStorage.getItem('token');

    return this._request('/users/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
  }

  setUserInfo({ name, about }) {
    const token = localStorage.getItem('token');

    return this._request('/users/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  getInitialCards() {
    const token = localStorage.getItem('token');

    return this._request('/cards', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
  }

  addCard({ name, link }) {
    const token = localStorage.getItem('token');
    
    return this._request('/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  _addLikeCard(id) {
    const token = localStorage.getItem('token');
    
    return this._request(`/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
  }

  _deleteLikeCard(id) {
    const token = localStorage.getItem('token');
    
    return this._request(`/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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
    const token = localStorage.getItem('token');
    
    return this._request(`/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
  }

  updateAvatar({ avatar }) {
    const token = localStorage.getItem('token');
    
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    });
  }
}

const api = new Api(BASE_URL);

export default api;
