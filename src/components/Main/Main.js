import { useState } from 'react'
import { TOKEN_KEY_IN_LS } from '../../utils/constrans'
import { ProductsList } from '../ProductsList/ProductsList'
import styles from './mainPage.module.css'

// const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV
// CJ9.eyJfaWQiOiI2MzkwNGY3MTU5Yjk4YjAzOGY3Nz
// lkYjQiLCJncm91cCI6InNtOCIsImlhdCI6MTY3MDQwMz
// I0NCwiZXhwIjoxNzAxOTM5MjQ0fQ.kD_eDa0DyKgNItEf13ipkw_vZrvAy4lqoE120_cvhLA'

// const USER = {
//   email: 'alexey.sitnikov@bk.ru',
//   password: '12345',
// }

export function Main() {
  const [products, setProducts] = useState([])

  const tokenFromLS = localStorage.getItem(TOKEN_KEY_IN_LS)
  const token = tokenFromLS ? JSON.parse(tokenFromLS) : ''

  fetch('https://api.react-learning.ru/products', {
    method: 'GET',
    headers: {
      authorization: `${token}`,
    },
  }).then((responce) => (responce.json())).then((productsList) => {
    setProducts(productsList.products)
  })

  return (
    <div className={`${styles.mainPage} justify-content-center align-items-center`}>
      <ProductsList products={products} />
    </div>
  )
}
