import { useMutation } from '@tanstack/react-query'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { api } from '../API/api'
import { setToken } from '../Redux/Slices/tokenSlice/tokenSlice'
import styles from './modal.module.css'
import editUserStyles from './userEdit.module.css'

export function AutorizationModal({ isModalAutorizationOpen, setIsModalAutorizationOpen }) {
  const UserData = {
    email: '',
    password: '',
    group: '',
  }
  const navigate = useNavigate()
  const REGISTRATION_QUERY = ['REGISTRATION_QUERY']
  const registerFn = async () => {
    const response = await api.getAutorization(UserData.email, UserData.password, UserData.group)
    // console.log({ response })
    if (response.status === 409) {
      const result = await response.json()
      alert(result.message)
      throw new Error(result.message)
    }
  }
  const dispatch = useDispatch()

  const { mutateAsync } = useMutation({
    mutationKey: REGISTRATION_QUERY,
    mutationFn: registerFn,
    onError: async () => {
      setIsModalAutorizationOpen(!true)
      navigate('/')
    },
    onSuccess: async () => {
      const response = await api.getLogIn(UserData.email, UserData.password)
      const result = await response.json()
      dispatch(setToken(result.token))
      setIsModalAutorizationOpen(!true)
      navigate('/')
    },
  })

  const closeModalHandler = () => {
    setIsModalAutorizationOpen(false)
  }

  return (
    <div className={isModalAutorizationOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
      <div className={`${styles.buttonClose}`}>
        <button onClick={closeModalHandler} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className={isModalAutorizationOpen ? `${styles.modal__content} ${styles.active}` : `${styles.modal__content}`}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            group: 'sm8',
          }}
          validationSchema={Yup.object(
            {
              email: Yup.string().email('Invalid email address').required('email'),
              password: Yup.string().min(5, 'Must be at least 5 character').required('Required'),
            },
          )}
          onSubmit={async (values) => {
            UserData.email = values.email
            UserData.password = values.password
            UserData.group = values.group
            await mutateAsync()
          }}
        >
          <Form className={editUserStyles.editForm}>

            <Field name="email" placeholder="Email" type="email" />
            <ErrorMessage component="span" className={editUserStyles.error} name="email" />
            <Field name="group" placeholder="Group" type="text" />

            <Field name="password" placeholder="Password" type="password" />
            <ErrorMessage component="span" className={editUserStyles.error} name="password" />

            <button type="submit" className="btn btn-primary">Register</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
