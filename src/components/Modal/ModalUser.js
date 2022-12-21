import {
  Field, Form, Formik,
} from 'formik'

import * as Yup from 'yup'
import styles from './modal.module.css'
import editUserStyles from './userEdit.module.css'

export function ModalUser({ isOpen, closeModal, userInfo }) {
  return (
    <div className={isOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
      <div className={isOpen ? `${styles.modal__content} ${styles.active}` : `${styles.modal__content}`}>
        <Formik
          initialValues={{
            name: userInfo.name,
            email: userInfo.email,
          }}
          validationSchema={Yup.object(
            {
              // email: Yup.string().email('Invalid email address').required('email asd'),
            },
          )}
          onSubmit={() => { closeModal(!true) }}
        >
          <Form className={editUserStyles.editForm}>

            <Field name="name" placeholder="Name" type="text" />
            <Field name="email" placeholder="Email" type="email" />
            <button type="submit" className="btn btn-primary">Close</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
