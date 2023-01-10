/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux'

import { decreaseProductAC, increaseProductAC } from '../Redux/ActionCreators/cartAC'

export function CartItem({ idx, product }) {
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.cart)

  const increaseProductQuantityHandler = () => {
    // console.log(product)
    dispatch(increaseProductAC(product))
  }

  const decreaseProductQuantityHandler = () => {
    dispatch(decreaseProductAC(product))
    console.log({ cart })
  }
  // console.log(product)

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <span className="me-4">
          {idx + 1}
          .
          {' '}
        </span>
        {/* <span className={`${status ? styles.done : ''}`}> */}
        <span>
          {product.id}
          {' '}
        </span>
      </div>
      <div>
        <button onClick={increaseProductQuantityHandler} type="button" className="btn mx-2 btn-success">+</button>
        <span>
          {`${product.quantityToBuy}`}
          {'       '}
        </span>
        <button onClick={decreaseProductQuantityHandler} type="button" className="btn btn-danger">-</button>
      </div>
    </li>
  )
}
