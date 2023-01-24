import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from '../API/api'
import { BackButton } from '../Cart/BackButton'

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
    <>
      <img src={product.pictures} alt="Food" />
      <BackButton />
    </>
  )
}
