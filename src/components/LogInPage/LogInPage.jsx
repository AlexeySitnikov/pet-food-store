import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_KEY_IN_LS } from '../../utils/constrans'
import { api } from '../API/api'
import { Modal } from '../Modal/Modal'
import imgHeader from './imgLogInPage.jpg'
import styles from './logInPageStyles.module.css'

// const USER = {
//   email: 'alexey.sitnikov@bk.ru',
//   password: '12345',
// }

export function LogInPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  // const autorization = async () => {
  //   const response = await fetch('https://api.react-learning.ru/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(USER),
  //   })
  //   const result = await response.json()
  //   return result
  // }

  const logInBtn = (e) => {
    setIsModalOpen(true)
    e.preventDefault()
    // navigate('/')
    // api.getLogIn()
    // .then((result) => {
    // localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(result.token))
    // return navigate('/')
    // }).catch(new Error('Ошибка авторизации'))
    // autorization().then((result) => {
    //   localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(result.token))
    //   console.log(TOKEN_KEY_IN_LS)
    //   return navigate('/')
    // }).catch(new Error('Ошибка авторизации'))
  }

  const autorizationBtn = (e) => {
    e.preventDefault()
    api.getAutorization()
      .then((result) => {
        localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(result.token))
      }).then(() => {
        navigate('/')
      })
      .catch(new Error('Ошибка авторизации'))
    return null
  }
  // const closeModal = () => {
  //   // console.log({ e })
  //   setIsModalOpen(!isModalOpen)
  // }

  return (
    <>
      <div className="container">
        <div className={`${styles.headerDiv} flex-column`}>
          <div className="text-center mb-2">
            <img src={imgHeader} className={`${styles.header}`} alt="" />
          </div>
          <hr />
          <div className="text-center">
            <button onClick={logInBtn} type="button" className="btn btn-warning mx-2">Login</button>
            <button onClick={autorizationBtn} type="button" className="btn btn-warning mx-2">Autorization</button>
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={isModalOpen} closeModal={setIsModalOpen}>
          {/* <h1>Modal</h1> */}
          {/* <button onClick={closeModal} type="button"
          className="my-2 btn btn-primary">LogIn</button> */}
        </Modal>
      </div>
    </>
  )
}
