import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { api } from '../API/api'
import styles from './modal.module.css'
import editUserStyles from './userEdit.module.css'
import { USER } from '../../utils/constrans'
import { getToken, setToken } from '../Redux/Slices/tokenSlice/tokenSlice'

export function Modal({ isOpen, closeModal }) {
  const LOGIN_QUERY = ['LOGIN_QUERY']
  const dispatch = useDispatch()

  const loginFn = async () => {
    const response = await api.getLogIn(USER.email, USER.password)
    const result = await response.json()
    if (response.status === 401) {
      alert(result.message)
      throw new Error(result.message)
    }
    dispatch(setToken(result.token))
  }

  const navigate = useNavigate()

  const { mutateAsync } = useMutation({
    mutationKey: LOGIN_QUERY,
    mutationFn: loginFn,
    onSuccess: () => {
      dispatch(getToken())
      closeModal(!true)
      navigate('/')
    },
  })

  const closeModalHandler = () => {
    closeModal(!true)
  }

  return (
    <div className={isOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
      <div className={`${styles.buttonClose}`}>
        <button onClick={closeModalHandler} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className={isOpen ? `${styles.modal__content} ${styles.active}` : `${styles.modal__content}`}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object(
            {
              email: Yup.string().email('Invalid email address').required('email asd'),
            },
          )}
          onSubmit={async (values) => {
            USER.email = values.email
            USER.password = values.password
            await mutateAsync()
          }}
        >
          <Form className={editUserStyles.editForm}>

            <Field name="email" placeholder="Email" type="email" />
            <ErrorMessage component="span" className={editUserStyles.error} name="email" />

            <Field name="password" placeholder="Password" type="password" />

            <button type="submit" className="btn btn-primary">LogIn</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
