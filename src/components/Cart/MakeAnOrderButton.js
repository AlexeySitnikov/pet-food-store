import { useNavigate } from 'react-router-dom'

export function MakeAnOrderButton({ products }) {
  const navigate = useNavigate()
  const makeAnOrderHandler = () => {
    navigate('/order', {
      state: {
        products,
      },
    })
  }

  return (
    <button onClick={makeAnOrderHandler} type="button" className="btn mx-2 btn-success">Make an order</button>
  )
}
