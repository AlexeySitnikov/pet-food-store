import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { api } from '../API/api'
import styles from './modal.module.css'
import editUserStyles from './userEdit.module.css'

export function Modal({ isOpen, closeModal }) {
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
            api.getLogIn(values.email, values.password)
              .then(closeModal(!true))
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
