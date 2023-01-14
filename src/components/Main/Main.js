import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
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
  const searchProducts = useSelector((store) => store.productsNameToSearch)
  let GETPRODUCTS = []
  let url = ''
  if (searchProducts.length) {
    GETPRODUCTS = ['GETPRODUCTS'].concat(searchProducts)
    url = 'https://api.react-learning.ru/products/search?query='.concat(searchProducts)
  } else {
    GETPRODUCTS = ['GETPRODUCTS']
    url = 'https://api.react-learning.ru/products'
  }

  const getProducts = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        authorization: `${api.getToken()}`,
      },
    })
    const responseArr = await response.json()
    if (searchProducts.length) {
      return responseArr
    }
    return responseArr.products
  }
  const query = useQuery({
    queryKey: GETPRODUCTS,
    queryFn: getProducts,
  })

  // надо сделать анимацию загрузки
  if (query.isLoading) { return null }
  if (!query.data) {
    return <p>not found</p>
  }

  if (!query.isLoading) {
    return (
      <div className="container">
        <div className={`${styles.mainPage} justify-content-center align-items-center`}>
          <ProductsList products={query.data} />
        </div>
      </div>
    )
  }
  return null
}
