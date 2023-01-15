/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { api } from '../API/api'
import { BackButton } from './BackButton'
import { CartItem } from './CartItem'
import { ClearCartButton } from './ClearCartButton'
import { MakeAnOrderButton } from './MakeAnOrderButton'

export function Cart() {
  const cart = useSelector((store) => store.products)
  const { data: productsFromQuery } = useQuery({
    queryKey: ['Products'].concat(cart.map((item) => item.id)),
    queryFn: () => api.getProductsByIds(cart.map((product) => product.id)),
  })
  const products = productsFromQuery ?? []

  const productsToBuy = products.filter(
    (product) => cart.findIndex(
      (productFromCart) => (productFromCart.id === product._id && productFromCart.wantToBuy),
    ) !== -1,
  )
  console.log({ productsToBuy })
  if (!products.length) {
    return (
      <>
        <p>Cart is empty...</p>
        <BackButton />
        <ClearCartButton />
      </>
    )
  }
  return (
    <>
      <ul className="list-group">
        {
          products.map((cartItem, i) => (
            <CartItem
              key={crypto.randomUUID()}
              product={cartItem}
              idx={i}
            />
          ))
        }
      </ul>
      <BackButton />
      <ClearCartButton />
      {/* <MakeAnOrderButton products={productsToBuy} /> */}
    </>
  )
}
