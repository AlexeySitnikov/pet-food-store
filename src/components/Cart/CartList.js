/* eslint-disable no-unused-expressions */
import { useSelector } from 'react-redux'
import { api } from '../API/api'
import { CartItem } from './CartItem'

export async function CartList() {
  const cart = useSelector((store) => store.cart)
  Promise.all(cart.map((item) => (api.getProductsById(item.id))))
    .then((value) => {
      value.forEach((element, num) => (console.log(element[num])))
    })

  const as = Promise.all(cart.map((item) => (api.getProductsById(item.id))))
    .then((value) => {
      value.forEach((element, num) => (

        <ul className="list-group">
          <CartItem
            // eslint-disable-next-line no-underscore-dangle
            key={element[num]._id}
            product={element[num]}
          />
        </ul>
      ))
    })
  return as
}
