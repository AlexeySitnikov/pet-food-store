import { useState } from 'react'
import { AutorizationModal } from '../Modal/AutorizationModal'
import { Modal } from '../Modal/Modal'
import imgHeader from './imgLogInPage.jpg'
import styles from './logInPageStyles.module.css'

// const USER = {
//   email: 'alexey.sitnikov@bk.ru',
//   password: '12345',
// }

export function LogInPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [isModalAutorizationOpen, setIsModalAutorizationOpen] = useState(false)

  const logInBtn = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const autorizationBtn = (e) => {
    setIsModalAutorizationOpen(true)
    e.preventDefault()
  }

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
            <button onClick={autorizationBtn} type="button" className="btn btn-warning mx-2">Register</button>
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={isModalOpen} closeModal={setIsModalOpen} />
        <AutorizationModal
          isModalAutorizationOpen={isModalAutorizationOpen}
          setIsModalAutorizationOpen={setIsModalAutorizationOpen}
        />
      </div>
    </>
  )
}
