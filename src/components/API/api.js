import { ALL_STORE, USER } from '../../utils/constrans'

const BASE_URL = 'https://api.react-learning.ru/products'
// const USER1 = {
//   email: 'alexey.sitnikov@bk.ru',
//   password: '12345',
// }

class API {
  constructor(url) {
    this.url = url
  }

  // eslint-disable-next-line class-methods-use-this
  getToken() {
    return JSON.parse(localStorage.getItem(ALL_STORE)).token
  }

  async getAllProducts() {
    const responce = await fetch('https://api.react-learning.ru/products', {
      method: 'GET',
      headers: {
        authorization: `${this.getToken()}`,
      },
    })
    const productsList = await responce.json()
    return productsList.products
  }

  async getProductsByIds(ids) {
    return Promise.all(ids.map((id) => fetch(`https://api.react-learning.ru/products/${id}`, {
      method: 'GET',
      headers: {
        authorization: `${this.getToken()}`,
      },
    })
      .then((res) => res.json())))
  }

  async getProductById(id) {
    const responce = await fetch(`https://api.react-learning.ru/products/${id}`, {
      method: 'GET',
      headers: {
        authorization: `${this.getToken()}`,
      },
    })
    const result = await responce.json()
    return result
  }

  // eslint-disable-next-line class-methods-use-this
  async getLogIn(email, password) {
    USER.email = email
    USER.password = password
    const response = await fetch('https://api.react-learning.ru/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(USER),
    })
    const result = await response.json()
    return result.token
  }

  // eslint-disable-next-line class-methods-use-this
  async getAutorization(email, password, group) {
    const userForAutorization = {
      email,
      password,
      group,
    }
    const response = await fetch('https://api.react-learning.ru/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userForAutorization),
    })
    const result = await response.json()
    return result
  }

  async getUserData() {
    const responce = await fetch('https://api.react-learning.ru/v2/sm8/users/me', {
      method: 'GET',
      headers: {
        authorization: `${this.getToken()}`,
      },
    })
    const result = await responce.json()
    return result
  }

  async changeUserData(name, about) {
    const changeUserData = {
      name,
      about,
    }
    const responce = await fetch('https://api.react-learning.ru/v2/sm8/users/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${this.getToken()}`,
      },
      body: JSON.stringify(changeUserData),
    })
    const result = await responce.json()
    return result
  }
}

export const api = new API(BASE_URL)
