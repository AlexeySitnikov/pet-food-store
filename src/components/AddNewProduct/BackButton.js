import { useNavigate } from 'react-router-dom'

export function BackButton() {
  const navigate = useNavigate()
  const backHandler = () => {
    navigate(-1)
  }

  return (
    <button onClick={backHandler} type="button" className="btn mx-2 btn-success">Back</button>
  )
}
