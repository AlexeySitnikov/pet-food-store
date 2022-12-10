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

export function Main({ products }) {
  // const [products, setProducts] = useState([])

  // const [token, setToken] = useState([])

  // eslint-disable-next-line no-unused-vars
  // const addNewProduct = ((product) => {
  //   const newProduct = {
  //     // id: product._id,
  //     // productName: product.name,
  //     // productPrice: product.price,
  //     // ...product,
  //   }
  //   setProducts((prev) => [...prev, newProduct])
  // })
  // setProducts((prev) => [...prev, products])

  // useEffect(() => {
  //   const tokenFromLS = localStorage.getItem(TOKEN_KEY_IN_LS)
  //   const prepareToken = tokenFromLS ? JSON.parse(tokenFromLS) : []
  //   if (tokenFromLS.length) {
  //     setToken(prepareToken)
  //   }
  // }, [])

  // const getAllProducts = () => {
  //   fetch('https://api.react-learning.ru/products', {
  //     method: 'GET',
  //     headers: {
  //       authorization: `${token}`,
  //     },
  //   }).then((responce) => (responce.json())).then((productsList) => {
  //     // console.log(productsList)
  //     // productsList.products.forEach((el) => setProducts(el))
  //     setProducts(productsList.products)
  //   })
  // }
  // getAllProducts()
  // useEffect(() => {
  //   fetch('https://api.react-learning.ru/products', {
  //     method: 'GET',
  //     headers: {
  //       authorization: `${TOKEN}`,
  //     },
  //   }).then((responce) => (responce.json())).then((productsList) => {
  //     // console.log(productsList)
  //     // productsList.products.forEach((el) => setProducts(el))
  //     setProducts(productsList.products)
  //   })
  // }, [])

  // console.log({ products })

  // const response = await fetch('https://api.react-learning.ru/products', {
  //   method: 'GET',
  //   headers: {
  //     authorization: `${TOKEN}`,
  //   },
  // })
  // const result = response.json()
  // console.log(result)

  return (
    <div className={`${styles.mainPage} justify-content-center align-items-center`}>
      <ProductsList products={products} />
    </div>
  )
}
