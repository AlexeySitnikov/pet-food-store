import { useMutation } from '@tanstack/react-query'
import {
  Field, Form, Formik,
} from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { api } from '../API/api'

import styles from './modal.module.css'
import editUserStyles from './userEdit.module.css'

export function ModalUser({ isOpen, closeModal, userInfo }) {
  const initialName = userInfo.name
  const initialEmail = userInfo.email
  const [userName, setUserName] = useState(initialName)
  const [userEmail, setUserEmail] = useState(initialEmail)
  const CHANGE_USER_DATA_QUERY = ['CHANGE_USER_DATA_QUERY']
  const navigate = useNavigate()

  const loginFn = async () => {
    const result = await api.changeUserData(userName, userInfo.about)
    setUserName(result.name)
    setUserEmail(result.email)
  }

  const clearModalForm = () => {
    setUserName(initialName)
    setUserEmail(initialEmail)
  }

  const closeModalHandler = () => {
    clearModalForm()
    closeModal(!true)
  }

  const { mutateAsync } = useMutation({
    mutationKey: CHANGE_USER_DATA_QUERY,
    mutationFn: loginFn,
    onSuccess: () => {
      navigate('/')
      closeModal(!true)
    },
  })

  const needToChangeClickHandled = async () => {
    await mutateAsync()
  }

  const emptyFunction = () => {}

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
            name: userName,
            email: userEmail,
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
          })}
          onsubmit={emptyFunction()}
        >
          <Form className={editUserStyles.editForm}>

            <Field
              name="name"
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value)
              }}
            />
            <Field
              name="email"
              type="email"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value)
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={closeModalHandler}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={((initialName === userName) && (initialEmail === userEmail))}
              onClick={needToChangeClickHandled}
            >
              Change
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
