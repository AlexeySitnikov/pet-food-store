import {
  Field, Form, Formik,
} from 'formik'

import * as Yup from 'yup'
import styles from './modal.module.css'
import editUserStyles from './userEdit.module.css'

export function ModalUser({ isOpen, closeModal, userInfo }) {
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

        <img className="" src={`${userInfo.avatar}`} alt="Avatar" />
        <Formik
          initialValues={{
            name: userInfo.name,
            email: userInfo.email,
          }}
          validationSchema={Yup.object({})}
          onSubmit={() => {
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
