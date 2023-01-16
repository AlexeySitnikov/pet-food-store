/* eslint-disable no-underscore-dangle */
export function OrderItem({ idx, product }) {
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
        <hr />
        <span>
          ----
          Кол-во для покупки
          {' '}
          {product.quantityToBuy}
        </span>
      </div>
    </li>
  )
}
