import { useLocation, useNavigate } from 'react-router-dom'
import { OrderItem } from './OrderItem'
import styles from './styles.module.css'

export function Order() {
  const location = useLocation()
  const navigate = useNavigate()
  const { products } = location.state

  let totalPrice = 0
  for (let i = 0; i < products.length; i += 1) {
    totalPrice += (products[i].price - ((products[i].price * products[i].discount) / 100))
    * products[i].quantityToBuy
  }

  if (products.length) {
    return (
      <div className={`${styles.makeOrderContainer}`}>
        <div>
          <div className={`${styles.orderPageTextLabel}`}>
            <h1>
              Order page
            </h1>
          </div>
          <ul className="list-group">
            {
        products.map((cartItem, i) => (
          <OrderItem
            key={crypto.randomUUID()}
            product={cartItem}
            idx={i}
          />
        ))
      }
          </ul>
          <div className={`${styles.totalPriceLabel}`}>
            <h2>
              Total price
              {' '}
              <span className={`${styles.totalPriceAmountLabel}`}>{`${totalPrice} rub`}</span>
            </h2>
          </div>
          <button onClick={() => { navigate(-1) }} type="button" className="btn mx-2 btn-success">Back</button>
        </div>
      </div>
    )
  }
  return (
    <>
      <h1>
        Order list is empty
      </h1>
      <button onClick={() => { navigate(-1) }} type="button" className="btn mx-2 btn-success">Back</button>
    </>
  )
}
