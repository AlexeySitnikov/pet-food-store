import { useNavigate } from 'react-router-dom'
import style from './styles.module.css'

export function BackButton() {
  const navigate = useNavigate()
  const backHandler = () => {
    navigate('/')
  }

  return (
    <button className={`${style.backButton}`} onClick={backHandler} type="button">Back to shop</button>
  )
}
