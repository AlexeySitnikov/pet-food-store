/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// import { useNavigate } from 'react-router-dom'
import { api } from '../API/api'
import { RatingStar } from '../RatingStars/RatingStar'

import style from './styles.module.css'

export function ListOfReviews({ review }) {
  const GETUSERBYID = [review.author]
  const GETME = ['GETME']
  const DELETECOMMENT = ['DELETECOMMENT']
  // const navigate = useNavigate()

  const getAuthorById = async () => {
    const result = await api.getUserDataById(review.author)
    return result
  }

  const getMyInfo = async () => {
    const result = await api.getUserData()
    return result
  }

  const deleteCommentFn = async () => {
    await api.deleteComment(review.product, review._id)
  }

  const { data: userById, isLoading } = useQuery({
    queryKey: GETUSERBYID,
    queryFn: getAuthorById,
  })

  const { data: userMe, isLoading: isLoadingUserMe } = useQuery({
    queryKey: GETME,
    queryFn: getMyInfo,
  })

  const queryClient = useQueryClient()

  const { mutateAsync: deleteComment } = useMutation({
    mutationKey: DELETECOMMENT,
    mutationFn: deleteCommentFn,
    onSuccess: () => {
      // navigate('/')
      queryClient.invalidateQueries()
    },
  })

  if (isLoading || isLoadingUserMe) {
    return null
  }

  return (
    <div>
      <hr />
      <div className={`${style.reviewItem}`}>
        <div className={`${style.reviewAutthor}`}>
          <span>{`${userById.name}`}</span>
        </div>
        {(userMe._id === userById._id) ? <button type="button" onClick={deleteComment}>Delete comment</button> : null}
        <div className={`${style.reviewComment}`}>
          <span>{`${review.text}`}</span>
          <span>
            {[...(new Array(review.rating))].map(() => <RatingStar key={crypto.randomUUID()} />)}
          </span>
        </div>
      </div>
      <hr />
    </div>
  )
}
