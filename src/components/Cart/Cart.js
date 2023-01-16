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

  // фунция filter возвращает массив, в котором только эл-менты из корзины
  // (которые нужны для покупки).
  // функция map, создается новый массив, в котором все элементы и их кол-во для покупки
  const productsToBuy = products.filter(
    (product) => cart.findIndex(
      (productFromCart) => (productFromCart.id === product._id && productFromCart.wantToBuy),
    ) !== -1,
  ).map((product) => {
    const currentProduct = cart.find((productFromCart) => productFromCart.id === product._id)
    return ({
      ...product,
      quantityToBuy: currentProduct.quantityToBuy,
    })
  })

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
      <MakeAnOrderButton products={productsToBuy} />
    </>
  )
}
