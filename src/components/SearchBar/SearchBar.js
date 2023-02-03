import { useNavigate } from 'react-router-dom'
import styles from './searchBar.module.css'

export function SearchBar({ searchParams, setSearchParams }) {
  const navigate = useNavigate()

  const sortByNameClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (searchParams.get('sort') === 'by_name=AZ') {
      setSearchParams({ sort: 'by_name=ZA' })
    } else { setSearchParams({ sort: 'by_name=AZ' }) }
  }

  const sortByPriceClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (searchParams.get('sort') === 'by_price=tolow') {
      setSearchParams({ sort: 'by_price=tohigh' })
    } else { setSearchParams({ sort: 'by_price=tolow' }) }
  }

  const sortByDiscountClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (searchParams.get('sort') === 'by_discount=tolow') {
      setSearchParams({ sort: 'by_discount=tohigh' })
    } else { setSearchParams({ sort: 'by_discount=tolow' }) }
  }

  const sortByRatingClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (searchParams.get('sort') === 'by_rating=tolow') {
      setSearchParams({ sort: 'by_rating=tohigh' })
    } else { setSearchParams({ sort: 'by_rating=tolow' }) }
  }

  const sortByCreateDateClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (searchParams.get('sort') === 'by_date=tolow') {
      setSearchParams({ sort: 'by_date=tohigh' })
    } else { setSearchParams({ sort: 'by_date=tolow' }) }
  }

  const addNewProductClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/addnewproduct')
  }

  return (
    <div className={`${styles.main}`}>
      <span className={`${styles.sortBy}`}>Sort by:</span>
      <button type="button" onClick={sortByNameClickHandler}>
        Name
        {searchParams.get('sort') === 'by_name=AZ' ? '↑' : ''}
        {searchParams.get('sort') === 'by_name=ZA' ? '↓' : ''}
      </button>
      <button type="button" onClick={sortByPriceClickHandler}>
        Price
        {searchParams.get('sort') === 'by_price=tolow' ? '↑' : ''}
        {searchParams.get('sort') === 'by_price=tohigh' ? '↓' : ''}
      </button>
      <button type="button" onClick={sortByDiscountClickHandler}>
        Discount
        {searchParams.get('sort') === 'by_discount=tolow' ? '↑' : ''}
        {searchParams.get('sort') === 'by_discount=tohigh' ? '↓' : ''}
      </button>
      <button type="button" onClick={sortByRatingClickHandler}>
        Rating
        {searchParams.get('sort') === 'by_rating=tolow' ? '↑' : ''}
        {searchParams.get('sort') === 'by_rating=tohigh' ? '↓' : ''}
      </button>
      <button type="button" onClick={sortByCreateDateClickHandler}>
        Date Updated
        {searchParams.get('sort') === 'by_date=tolow' ? '↑' : ''}
        {searchParams.get('sort') === 'by_date=tohigh' ? '↓' : ''}
      </button>
      <button type="button" onClick={addNewProductClickHandler}>Add new product</button>
    </div>
  )
}
