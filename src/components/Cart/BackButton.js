import { useNavigate } from 'react-router-dom'

export function BackButton() {
  const navigate = useNavigate()
  const backHandler = () => {
    navigate('/')
  }

  return (
    <button onClick={backHandler} type="button" className="btn mx-2 btn-success">Back to shop</button>
  )
}
