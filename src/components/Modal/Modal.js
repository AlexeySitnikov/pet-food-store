import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useQuery } from '@tanstack/react-query'
import { api } from '../API/api'
import styles from './modal.module.css'
import editUserStyles from './userEdit.module.css'
import { USER } from '../../utils/constrans'

export function Modal({ isOpen, closeModal }) {
  const LOGIN_QUERY = ['LOGIN_QUERY']
  const loginFn = () => {
    api.getLogIn(USER.email, USER.password)
  }

  const { refetch } = useQuery({
    queryKey: LOGIN_QUERY,
    queryFn: loginFn,
    refetchOnWindowFocus: false,
    enabled: false,
  })

  const navigate = useNavigate()
  return (
    <div className={isOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
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
          onSubmit={(values) => {
            USER.email = values.email
            USER.password = values.password
            refetch()
            closeModal(!true)

            setTimeout(() => {
              navigate('/')
            }, 300)
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
