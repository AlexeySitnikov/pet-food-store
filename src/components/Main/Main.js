import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ProductsList } from '../ProductsList/ProductsList'
import { SearchBar } from '../SearchBar/SearchBar'
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
  const token = useSelector((store) => store.token)

  const [searchParams, setSearchParams] = useSearchParams()

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
        authorization: token,
      },
    })
    const responseArr = await response.json()
    if (searchProducts.length) {
      return responseArr
    }
    return responseArr.products
  }

  const { data: products, isLoading } = useQuery({
    queryKey: GETPRODUCTS,
    queryFn: getProducts,
  })

  // надо сделать анимацию загрузки
  if (isLoading) { return null }
  if (!products) {
    return <p>not found</p>
  }

  if (!isLoading) {
    if (searchParams.get('sort') === 'by_name=AZ') {
      products.sort((first, second) => {
        if (first.name.toLowerCase() < second.name.toLowerCase()) { return -1 }
        if (first.name.toLowerCase() > second.name.toLowerCase()) { return 1 }
        return 0
      })
    }
    if (searchParams.get('sort') === 'by_name=ZA') {
      products.sort((first, second) => {
        if (first.name.toLowerCase() < second.name.toLowerCase()) { return 1 }
        if (first.name.toLowerCase() > second.name.toLowerCase()) { return -1 }
        return 0
      })
    }
    if (searchParams.get('sort') === 'by_price=tolow') {
      products.sort((first, second) => {
        const firstPrice = +first.price
        const secondPrice = +second.price
        const firstDiscount = +first.discount / 100
        const secondDiscount = +second.discount / 100
        return ((secondPrice - secondPrice * secondDiscount)
        - (firstPrice - firstPrice * firstDiscount))
      })
    }
    if (searchParams.get('sort') === 'by_price=tohigh') {
      products.sort((first, second) => {
        const firstPrice = +first.price
        const secondPrice = +second.price
        const firstDiscount = +first.discount / 100
        const secondDiscount = +second.discount / 100
        return ((firstPrice - firstPrice * firstDiscount)
            - (secondPrice - secondPrice * secondDiscount))
      })
    }
    if (searchParams.get('sort') === 'by_discount=tolow') {
      products.sort((first, second) => ((+second.discount) - (+first.discount)))
    }
    if (searchParams.get('sort') === 'by_discount=tohigh') {
      products.sort((first, second) => ((+first.discount) - (+second.discount)))
    }
    if (searchParams.get('sort') === 'by_rating=tolow') {
      products.sort((first, second) => {
        let firstRating = 0
        let secondRating = 0
        if (first.reviews.length > 0) {
          for (let i = 0; i < first.reviews.length; i += 1) {
            firstRating += first.reviews[i].rating
          }
          firstRating /= first.reviews.length
        }
        if (second.reviews.length > 0) {
          for (let i = 0; i < second.reviews.length; i += 1) {
            secondRating += second.reviews[i].rating
          }
          secondRating /= second.reviews.length
        }
        return secondRating - firstRating
      })
    }
    if (searchParams.get('sort') === 'by_rating=tohigh') {
      products.sort((first, second) => {
        let firstRating = 0
        let secondRating = 0
        if (first.reviews.length > 0) {
          for (let i = 0; i < first.reviews.length; i += 1) {
            firstRating += first.reviews[i].rating
          }
          firstRating /= first.reviews.length
        }
        if (second.reviews.length > 0) {
          for (let i = 0; i < second.reviews.length; i += 1) {
            secondRating += second.reviews[i].rating
          }
          secondRating /= second.reviews.length
        }
        return firstRating - secondRating
      })
    }
    if (searchParams.get('sort') === 'by_date=tolow') {
      products.sort((first, second) => (
        (new Date(first.updated_at)) - (new Date(second.updated_at))
      ))
    }
    if (searchParams.get('sort') === 'by_date=tohigh') {
      products.sort((first, second) => (
        (new Date(second.updated_at)) - (new Date(first.updated_at))
      ))
    }
    return (
      <>
        <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
        <div className={`${styles.mainPage}`}>
          <ProductsList products={products} />
        </div>
      </>
    )
  }
}
