import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../API/api'
import { ModalUser } from '../Modal/ModalUser'
import styles from './headerStyles.module.css'
import logo from './Header_logo.jpg'
import cart from './cart.png'

export function Header() {
  const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false)
  const navigate = useNavigate()

  const GETUSERINFO = ['GETUSERINFO']
  const getUserInfo = async () => {
    const responce = await fetch('https://api.react-learning.ru/v2/sm8/users/me', {
      method: 'GET',
      headers: {
        authorization: `${api.getToken()}`,
      },
    })
    const result = await responce.json()
    return result
  }
  const query = useQuery({
    queryKey: GETUSERINFO,
    queryFn: getUserInfo,
  })

  const showUser = (e) => {
    e.preventDefault()
    setIsModalUserInfoOpen(true)
  }

  const showCart = (e) => {
    e.preventDefault()
    navigate('cart')
  }

  if (query.isLoading) { return null }
  if (!query.isLoading && !query.isError) {
    return (
      <>
        <div className={`${styles.header} d-flex my-5 align-self-center align-items-center`}>
          <div className="me-auto p-2">
            <img className={`${styles.header__logo}`} src={`${logo}`} alt="logo" />
          </div>
          <div className={`${styles.header__control}`}>
            <button type="button" onClick={showUser} className={`${styles.button} px-5 mx-1`}>{query.data.name}</button>

            <button type="button" onClick={showCart} className={`${styles.button} px-5 mx-1`}>
              Cart
              {' '}
              <img src={`${cart}`} alt="cart" />
            </button>

          </div>
        </div>
        <div>
          <ModalUser
            isOpen={isModalUserInfoOpen}
            closeModal={setIsModalUserInfoOpen}
            userInfo={query.data}
          />
        </div>
      </>
    )
  }
  return null
}
