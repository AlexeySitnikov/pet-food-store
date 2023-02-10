/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  decreaseProductsQuantity, increacreProductQuantity, removeFromCart, checkWantToBuy,
} from '../Redux/Slices/productsSlice/productsSlice'
import trash from './trash.png'

export function CartItem({ idx, product }) {
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.products)
  const currentProduct = cart.find((item) => item.id === product._id)
  const navigate = useNavigate()

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

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(product))
  }

  const checkWantToBuyHandler = () => {
    dispatch(checkWantToBuy(product))
  }

  const showProductClickHandeler = () => {
    navigate(`/products/${product._id}/`)
  }

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <div className="d-flex align-items-center">
          <label htmlFor={currentProduct.id}>
            <input
              id={currentProduct.id}
              name="Product"
              type="checkbox"
              checked={currentProduct.wantToBuy}
              onChange={checkWantToBuyHandler}
            />
            <span className="me-4">
              {idx + 1}
              .
              {' '}
            </span>
            <span onClick={showProductClickHandeler}>
              {product.name}
              {' '}
            </span>
          </label>
        </div>
        <div>
          <p>{`Price ${product.price} rub/pc`}</p>
          {product.discount === 0 ? '' : <p>{`Discount ${product.discount} %`}</p>}
        </div>
      </div>
      <div className="">
        <div className="flex-column justify-content-end  mx-5">
          <div>
            <button onClick={decreaseProductQuantityHandler} type="button" className={`btn mx-2 ${currentProduct.quantityToBuy > 1 ? 'btn-danger' : 'btn-secondary'}`}>-</button>
            <span>
              {`${currentProduct.quantityToBuy}`}
              {'     '}
            </span>
            <button onClick={increaseProductQuantityHandler} type="button" className={`btn mx-2 ${currentProduct.quantityToBuy < product.stock ? 'btn-success' : 'btn-secondary'}`}>+</button>
            <button onClick={removeFromCartHandler} type="button" className="btn btn-outline-light"><img src={`${trash}`} alt="trash" /></button>

          </div>
          <span className="">{`in stock ${product.stock}`}</span>
        </div>
      </div>
    </li>
  )
}
