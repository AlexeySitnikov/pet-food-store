/* eslint-disable no-underscore-dangle */

export function LikeProductItem({ idx, product }) {
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
            <span>
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
