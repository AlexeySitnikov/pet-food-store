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

        {/* <input type="text" name="name" value={`${userInfo.name}`} /> */}
        <img className="" src={`${userInfo.avatar}`} alt="Avatar" />
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
          onSubmit={() => {
            console.log(userInfo.name)
            closeModal(!true)
          }}
        >
          <Form className={editUserStyles.editForm}>

            <Field name="name" placeholder="Name" type="text" value={`${userInfo.name}`} />
            <Field name="email" placeholder="Email" type="email" value={`${userInfo.email}`} />
            <button type="submit" className="btn btn-primary">Close</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
