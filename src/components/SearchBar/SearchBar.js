import { useNavigate } from 'react-router-dom'

export function SearchBar() {
  const navigate = useNavigate()

  const sortByNameClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/products/byname')
  }

  const sortByPriceClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/products/byprice')
  }

  const sortByDiscountClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/products/bydiscount')
  }

  const sortByRatingClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/products/byrating')
  }

  const sortByCreateDateClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/products/bydate')
  }

  return (
    <div className="d-flex justify-content-center py-5 align-items-center">
      <span>Sort</span>
      <button type="button" className="mx-1" onClick={sortByNameClickHandler}>By Name</button>
      <button type="button" className="mx-1" onClick={sortByPriceClickHandler}>By Price</button>
      <button type="button" className="mx-1" onClick={sortByDiscountClickHandler}>By Discount</button>
      <button type="button" className="mx-1" onClick={sortByRatingClickHandler}>By Rating</button>
      <button type="button" className="mx-1" onClick={sortByCreateDateClickHandler}>
        By Date
        <p>Updated</p>
      </button>
    </div>
  )
}
