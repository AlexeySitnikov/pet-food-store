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

  const addNewProductClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/addnewproduct')
  }

  return (
    <div className="d-flex justify-content-center py-5 align-items-center">
      <span>Sort by</span>
      <button type="button" className="mx-1" onClick={sortByNameClickHandler}>Name</button>
      <button type="button" className="mx-1" onClick={sortByPriceClickHandler}>Price</button>
      <button type="button" className="mx-1" onClick={sortByDiscountClickHandler}>Discount</button>
      <button type="button" className="mx-1" onClick={sortByRatingClickHandler}>Rating</button>
      <button type="button" className="mx-1" onClick={sortByCreateDateClickHandler}>
        Date
        <p>Updated</p>
      </button>
      <button type="button" className="mx-1" onClick={addNewProductClickHandler}>Add new product</button>
    </div>
  )
}
