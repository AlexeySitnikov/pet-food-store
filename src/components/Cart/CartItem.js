/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux'
import { decreaseProductsQuantity, increacreProductQuantity } from '../Redux/Slices/productsSlice/productsSlice'

export function CartItem({ idx, product }) {
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.products)
  const currentProduct = cart.find((item) => item.id === product._id)

  const increaseProductQuantityHandler = () => {
    if (currentProduct.quantityToBuy < product.stock) {
      dispatch(increacreProductQuantity(product))
    }
  }

  const decreaseProductQuantityHandler = () => {
    if (currentProduct.quantityToBuy > 1) {
      dispatch(decreaseProductsQuantity(product))
    }
  }

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <span className="me-4">
          {idx + 1}
          .
          {' '}
        </span>
        <span>
          {product.name}
          {' '}
        </span>
      </div>
      <div>
        <button onClick={increaseProductQuantityHandler} type="button" className="btn mx-2 btn-success">+</button>
        <span>
          {`${currentProduct.quantityToBuy}`}
          {'       '}
        </span>
        <button onClick={decreaseProductQuantityHandler} type="button" className="btn btn-danger">-</button>
      </div>
    </li>
  )
}
