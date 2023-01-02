import { TOKEN_KEY_IN_LS, USER } from '../../utils/constrans'

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
    localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(result.token))
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
    console.log(result)
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
