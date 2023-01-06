// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BackButton } from './BackButton'
import { CartItem } from './CartItem'
import { ClearCartButton } from './ClearCartButton'

export function Cart() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch()
  // }, [dispatch])

  const cart = useSelector((store) => store.cart)
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
