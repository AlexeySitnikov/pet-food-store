import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { api } from '../API/api'
import { BackButton } from './BackButton'
import { LikeProductItem } from './LikeProductItem'
import styles from './styles.cart.module.css'

export function LikeProductPage() {
  const likeProducts = useSelector((store) => store.likeProduct)
  const { data: productsFromQuery } = useQuery({
    queryKey: ['likeProducts'].concat(likeProducts.map((item) => item)),
    queryFn: () => api.getProductsByIds(likeProducts.map((id) => id)),
  })

  const products = productsFromQuery ?? []

  if (!products.length) {
    return (
      <>
        <p>Cart is empty...</p>
        <BackButton />
      </>
    )
  }
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.listOfProducts}`}>
          <ul className="list-group">
            {
        productsFromQuery.map((product, i) => (
          <LikeProductItem
            key={crypto.randomUUID()}
            product={product}
            idx={i}
          />
        ))
      }
          </ul>
        </div>
      </div>
      <BackButton />
    </>
  )
}
