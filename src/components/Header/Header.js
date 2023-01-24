/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ModalUser } from '../Modal/ModalUser'
import styles from './headerStyles.module.css'
import logo from './Header_logo.jpg'
import cart from './cart.png'
import { useDebounce } from '../hooks/useDebounce'
import { changeProductNameForSearch } from '../Redux/Slices/searchProductByNameSlice/searchProductByNameSlice'

export function Header() {
  const [isModalUserInfoOpen, setIsModalUserInfoOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((store) => store.token)
  const products = useSelector((store) => store.products)

  const [searchParams, setSearchParams] = useSearchParams()
  const [input, setInput] = useState(() => searchParams.get('query') ?? '')
  const debounceValue = useDebounce(input, 300)

  useEffect(() => {
    dispatch(changeProductNameForSearch(debounceValue))
  }, [debounceValue])

  useEffect(() => {
    setSearchParams({ query: input })
  }, [input])

  const GETUSERINFO = ['GETUSERINFO'].concat(isModalUserInfoOpen)
  const getUserInfo = async () => {
    const responce = await fetch('https://api.react-learning.ru/v2/sm8/users/me', {
      method: 'GET',
      headers: {
        authorization: token,
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

  const searchProductHandler = () => {
    // querySearchProductByName(debounceValue)
  }
  if (query.isLoading) { return null }
  if (!query.isLoading && !query.isError) {
    return (
      <>
        <div className={`${styles.header} d-flex my-5 align-self-center align-items-center`}>
          <div className="me-auto p-2">
            <img className={`${styles.header__logo}`} src={`${logo}`} alt="logo" />
          </div>
          <div className="d1">
            <form>
              <input
                type="text"
                placeholder="Искать здесь..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" onSubmit={searchProductHandler}>Искать</button>
            </form>
          </div>
          <div className={`${styles.header__control}`}>
            <button type="button" onClick={showUser} className={`${styles.button} px-5 mx-1`}>{query.data.name}</button>

            <button type="button" onClick={showCart} className={`${styles.button} px-5 mx-1`}>
              <div>
                Cart
                <img src={`${cart}`} alt="cart" />
                <span className={`${styles.numberCircle}`}>{`${products.length}`}</span>
              </div>
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
}
