import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { Header } from '../Header/Header'
import { SearchBar } from './SearchBar'
import { api } from '../API/api'
import { ProductsList } from '../ProductsList/ProductsList'
import styles from './mainPage.module.css'

export function SortByDiscount() {
  const searchProducts = useSelector((store) => store.productsNameToSearch)
  const SORTPRODUCTSBYDISCOUNT = ['SORTPRODUCTSBYDISCOUNT'].concat(searchProducts)

  const { data: products, isLoading } = useQuery({
    queryKey: SORTPRODUCTSBYDISCOUNT,
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
    products.sort((first, second) => ((+second.discount) - (+first.discount)))
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
