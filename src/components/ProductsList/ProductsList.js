/* eslint-disable no-underscore-dangle */
import { ProductItem } from '../ProductItem/ProductItem'

export function ProductsList({ products }) {
  return (
    <>
      {
      products.map((product) => (
        <ProductItem
          key={product._id}
          product={product}
        />
      ))
    }
    </>
  )
}
