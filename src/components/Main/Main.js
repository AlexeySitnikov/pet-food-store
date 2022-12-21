import { useEffect, useState } from 'react'
import { api } from '../API/api'
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

  useEffect(() => {
    api.getAllProducts().then((productsArr) => setProducts(productsArr))
  }, [])

  return (
    <div className={`${styles.mainPage} justify-content-center align-items-center`}>
      <ProductsList products={products} />
    </div>
  )
}
