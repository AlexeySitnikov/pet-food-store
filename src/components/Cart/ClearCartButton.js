import { useDispatch } from 'react-redux'
import { clearCartAC } from '../Redux/ActionCreators/cartAC'

export function ClearCartButton() {
  const dispatch = useDispatch()
  const clearCart = (e) => {
    e.preventDefault()
    dispatch(clearCartAC())
  }

  return (
    <button onClick={clearCart} type="button" className="btn mx-2 btn-success">Clear cart</button>
  )
}
