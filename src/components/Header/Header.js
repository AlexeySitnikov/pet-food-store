import { useEffect, useState } from 'react'
import { api } from '../API/api'
import { ModalUser } from '../Modal/ModalUser'
import styles from './headerStyles.module.css'
import logo from './Header_logo.jpg'

export function Header() {
  const [user, setUser] = useState({})
  const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false)

  useEffect(() => {
    api.getUserData().then((result) => { setUser(result) })
  }, [])

  const showUser = (e) => {
    e.preventDefault()
    setIsModalUserInfoOpen(true)
  }

  return (
    <>
      <div className={`${styles.header} d-flex my-5 align-self-center align-items-center`}>
        <div className="me-auto p-2">
          <img className={`${styles.header__logo}`} src={`${logo}`} alt="logo" />
        </div>
        <div className={`${styles.header__control}`}>
          <button type="button" onClick={showUser} className={`${styles.button} px-5 mx-1`}>{user.name}</button>
          <button type="button" className={`${styles.button} px-5 mx-1`}>Cart</button>
        </div>
      </div>
      <div>
        <ModalUser
          isOpen={isModalUserInfoOpen}
          closeModal={setIsModalUserInfoOpen}
          userInfo={user}
        />
      </div>
    </>
  )
}
