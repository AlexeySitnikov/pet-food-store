import { useQuery } from '@tanstack/react-query'
import { api } from '../API/api'
import { RatingStar } from '../RatingStars/RatingStar'

import style from './styles.module.css'

export function ListOfReviews({ review }) {
  const GETUSERBYID = [review.author]

  const getAuthorById = async () => {
    const result = await api.getUserDataById(review.author)
    return result
  }

  const { data: userById, isLoading } = useQuery({
    queryKey: GETUSERBYID,
    queryFn: getAuthorById,
  })

  if (isLoading) {
    return null
  }

  return (
    <div>
      <hr />
      <div className={`${style.reviewItem}`}>
        <div className={`${style.reviewAutthor}`}>
          <span>{`${userById.name}`}</span>
        </div>
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
