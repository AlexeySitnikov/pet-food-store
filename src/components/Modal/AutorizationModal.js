import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { api } from '../API/api'
import styles from './modal.module.css'
import editUserStyles from './userEdit.module.css'

export function AutorizationModal({ isModalAutorizationOpen, setIsModalAutorizationOpen }) {
  const UserData = {
    email: '',
    password: '',
    group: '',
  }
  const navigate = useNavigate()

  return (
    <div className={isModalAutorizationOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
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
            },
          )}
          onSubmit={(values) => {
            UserData.email = values.email
            UserData.password = values.password
            UserData.group = values.group
            api.getAutorization(UserData.email, UserData.password, UserData.group)
            setTimeout(() => {
              api.getLogIn(UserData.email, UserData.password)
            }, 300)

            setIsModalAutorizationOpen(!true)
            setTimeout(() => {
              navigate('/')
            }, 500)
          }}
        >
          <Form className={editUserStyles.editForm}>

            <Field name="email" placeholder="Email" type="email" />
            <ErrorMessage component="span" className={editUserStyles.error} name="email" />
            <Field name="group" placeholder="Group" type="text" />

            <Field name="password" placeholder="Password" type="password" />

            <button type="submit" className="btn btn-primary">Autorized</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
