/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */

import { useNavigate } from 'react-router-dom'

export function LikeProductItem({ idx, product }) {
  const navigate = useNavigate()

  const showProductClickHandeler = () => {
    navigate(`/products/${product._id}/`)
  }
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <div className="d-flex align-items-center">
          <label htmlFor={product._id}>
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
    </li>
  )
}
