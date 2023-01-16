import { useLocation, useNavigate } from 'react-router-dom'
import { OrderItem } from './OrderItem'

export function Order() {
  const location = useLocation()
  const navigate = useNavigate()
  const { products } = location.state

  if (products.length) {
    return (
      <>
        <h1>
          Order page
        </h1>
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
        <button onClick={() => { navigate(-1) }} type="button" className="btn mx-2 btn-success">Back</button>
      </>
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
