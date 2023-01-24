import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from '../API/api'
import { BackButton } from './BackButton'
import { ListOfReviews } from './ListOfReviews'
import style from './styles.module.css'

export function ProductPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [input] = useState(() => searchParams.get('id') ?? '')
  const GETPRODUCTID = [input]

  useEffect(() => {
    setSearchParams({ id: input })
  }, [input])

  const getProductById = async () => {
    const result = await api.getProductById(input)
    return result
  }

  const { data, isLoading } = useQuery({
    queryKey: GETPRODUCTID,
    queryFn: getProductById,
  })

  const product = data

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
        <BackButton />
      </>
    )
  }
  return (
    <div className={`${style.page}`}>
      <div className={`${style.backButtonDiv}`}>
        <BackButton />
      </div>
      <img className={`${style.img}`} src={product.pictures} alt="Food" />
      <h1 className={`${style.productName}`}>
        {`${product.name}`}
      </h1>
      <h3 className={`${style.productName}`}>
        <div>
          <span>{`Price is ${product.price} rub`}</span>
        </div>
      </h3>
      <div>
        {product.reviews.map((review) => (
          <ListOfReviews key={crypto.randomUUID()} review={review} />
        ))}
      </div>
    </div>
  )
}
