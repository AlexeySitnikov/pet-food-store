import { USER_TOKEN } from '../../utils/constrans'
import imgHeader from './imgLogInPage.jpg'
import styles from './logInPageStyles.module.css'

const USER = {
  email: 'alexey.sitnikov@bk.ru',
  password: '12345',
}
//   const autorization = async () => {
//     const response = await fetch('https://api.react-learning.ru/v2/sm8/users/me', {
//       headers: {
//         authorization: TOKEN,
//       },
//     })
//     const res = await response.json()
//     return res
//   }

export function LogInPage() {
  const autorization = async () => {
    const response = await fetch('https://api.react-learning.ru/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(USER),
    })
    const result = await response.json()
    return result
  }

  const logInBtn = (e) => {
    e.preventDefault()
    autorization().then((result) => {
      console.log(result)
      localStorage.setItem(USER_TOKEN, JSON.stringify(result.token))
    }).catch(new Error('Ошибка авторизации'))
  }

  return (
    <div className="container">
      <div className={`${styles.headerDiv} flex-column`}>
        <div className="text-center mb-2">
          <img src={imgHeader} className={`${styles.header}`} alt="" />
        </div>
        <hr />
        <div className="text-center">
          <button onClick={logInBtn} type="button" className="btn btn-warning mx-2">Login</button>
          <button type="button" className="btn btn-warning mx-2">Skip</button>
        </div>
      </div>
    </div>
  )
}
