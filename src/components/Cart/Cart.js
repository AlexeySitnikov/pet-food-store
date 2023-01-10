// import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { api } from '../API/api'
import { BackButton } from './BackButton'
import { CartItem } from './CartItem'
import { ClearCartButton } from './ClearCartButton'

export function Cart() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch()
  // }, [dispatch])

  const cart = useSelector((store) => store.cart)
  const { data: products } = useQuery({
    queryKey: cart,
    queryFn: () => api.getProductsById(cart.map((product) => product.id)),
  })
  // Promise.all(cart.map((item) => (api.getProductsById(item.id))))
  //   .then((value) => {
  //     // eslint-disable-next-line guard-for-in, no-restricted-syntax
  //     value.forEach((element) => {
  //       console.log({ element })
  //     })
  //   })
  console.log(products)
  if (!cart.length) {
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
          cart.map((cartItem, i) => (
            <CartItem
              key={cartItem.id}
              product={cartItem}
              idx={i}
            />
          ))
        }
      </ul>
      <BackButton />
      <ClearCartButton />
    </>
  )
}
