import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { TOKEN_KEY_IN_LS } from '../../utils/constrans'
// import { api } from '../API/api'
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
  const AUTORIZATION_QUERY = ['AUTORIZATION_QUERY']
  const autorizationFn = async () => {
    const asd = {
      email: '4alexey.sitnikov@bk.ru',
      group: 'sm8',
      password: '12345',
    }
    const response = await fetch('https://api.react-learning.ru/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(asd),
    })
    const result = await response.json()
    return result
    // console.log(message)
    // localStorage.setItem(TOKEN_KEY_IN_LS, JSON.stringify(response.token))
    // })
  }
  // const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: autorizationFn,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: AUTORIZATION_QUERY })
    },
  })

  // eslint-disable-next-line no-unused-vars
  const query = useQuery({
    queryKey: AUTORIZATION_QUERY,
    queryFn: autorizationFn,
    refetchOnWindowFocus: false,
    enabled: false,
  })

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

  const autorizationBtn = async (e) => {
    e.preventDefault()
    const result = await mutation.mutateAsync()
    console.log(result)
    // console.log(mutation.error)
    setTimeout(() => {
      navigate('/')
    }, 300)
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
