/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Field, Form, Formik,
} from 'formik'
// import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { api } from '../API/api'

import styles from './modal.module.css'
import editUserStyles from './userEdit.module.css'

export function ModalProductComment({ isOpen, closeModal, product }) {
  const ADDCOMMENT = ['ADDCOMMENT'].concat(product)
  // const navigate = useNavigate()

  const addCommentFn = async (comment) => {
    const review = {
      rating: 1,
      text: comment,
    }
    api.addComment(product._id, review)
  }

  const queryClient = useQueryClient()

  const { mutateAsync: addComment } = useMutation({
    mutationKey: ADDCOMMENT,
    mutationFn: addCommentFn,
    onSuccess: () => {
      queryClient.invalidateQueries()
      closeModal(!true)
      // navigate('/')
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
            comment: '',
          }}
          validationSchema={Yup.object({
            comment: Yup.string().min(1, 'Must be at least 1 character'),
          })}
          onSubmit={async (values) => {
            await addComment(values.comment)
          }}
        >
          <Form className={editUserStyles.editForm}>
            <label htmlFor="comment">{`Comment for "${product.name}"`}</label>
            <Field name="comment" type="text" placeholder="Place comment here" />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Add
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
