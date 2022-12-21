import { TOKEN_KEY_IN_LS } from '../../utils/constrans'

const BASE_URL = 'https://api.react-learning.ru/products'
// const USER1 = {
//   email: 'alexey.sitnikov@bk.ru',
//   password: '12345',
// }

class API {
  constructor(url) {
    this.url = url
    // this.USER1 = USER1
  }

  // eslint-disable-next-line class-methods-use-this
  getToken() {
    return JSON.parse(localStorage.getItem(TOKEN_KEY_IN_LS))
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

  // eslint-disable-next-line class-methods-use-this
  async getLogIn(email, password) {
    // eslint-disable-next-line no-unused-vars
    const USER = {
      email,
      password,
    }
    const response = await fetch('https://api.react-learning.ru/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(USER),
    })
    const result = await response.json()
    localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(result.token))
  }

  async getAutorization() {
    const response = await fetch('https://api.react-learning.ru/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.USER),
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
}

export const api = new API(BASE_URL)
