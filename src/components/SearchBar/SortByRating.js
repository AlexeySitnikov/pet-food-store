import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { Header } from '../Header/Header'
import { SearchBar } from './SearchBar'
import { api } from '../API/api'
import { ProductsList } from '../ProductsList/ProductsList'
import styles from './mainPage.module.css'

export function SortByRating() {
  const searchProducts = useSelector((store) => store.productsNameToSearch)
  const SORTPRODUCTSBYRATING = ['SORTPRODUCTSBYRATING'].concat(searchProducts)

  const { data: products, isLoading } = useQuery({
    queryKey: SORTPRODUCTSBYRATING,
    queryFn: () => api.getProductsByQuery(searchProducts),
  })

  if (!products || !products.length) {
    return (
      <>
        <Header />
        <SearchBar />
        <h1>Not Found</h1>
      </>
    )
  }

  if (!isLoading) {
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

  if (isLoading) {
    return (
      <>
        <Header />
        <SearchBar />
        <h1>Searching...</h1>
      </>
    )
  }
  return (
    <>
      <Header />
      <SearchBar />
      <div className="container">
        <div className={`${styles.mainPage} justify-content-center align-items-center`}>
          <ProductsList products={products} />
        </div>
      </div>
    </>
  )
}
