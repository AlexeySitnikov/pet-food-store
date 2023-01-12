import { useDispatch } from 'react-redux'
import { clearCart } from '../Redux/Slices/productsSlice/productsSlice'

export function ClearCartButton() {
  const dispatch = useDispatch()
  const clearCartHandler = (e) => {
    e.preventDefault()
    dispatch(clearCart())
  }

  return (
    <button onClick={clearCartHandler} type="button" className="btn mx-2 btn-success">Clear cart</button>
  )
}
