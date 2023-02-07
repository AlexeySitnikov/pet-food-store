import styles from './searchBar.module.css'

export function SearchBar({ searchParams, setSearchParams }) {
  const params = {
    query: searchParams.get('query') ?? '',
    sort: searchParams.get('sort') ?? '',
  }

  const sortByNameClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (params.sort === 'by_name=AZ') {
      params.sort = 'by_name=ZA'
      setSearchParams(params)
    } else {
      params.sort = 'by_name=AZ'
      setSearchParams(params)
    }
  }

  const sortByPriceClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (params.sort === 'by_price=tolow') {
      params.sort = 'by_price=tohigh'
      setSearchParams(params)
    } else {
      params.sort = 'by_price=tolow'
      setSearchParams(params)
    }
  }

  const sortByDiscountClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (params.sort === 'by_discount=tolow') {
      params.sort = 'by_discount=tohigh'
      setSearchParams(params)
    } else {
      params.sort = 'by_discount=tolow'
      setSearchParams(params)
    }
  }

  const sortByRatingClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (params.sort === 'by_rating=tolow') {
      params.sort = 'by_rating=tohigh'
      setSearchParams(params)
    } else {
      params.sort = 'by_rating=tolow'
      setSearchParams(params)
    }
  }

  const sortByCreateDateClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (params.sort === 'by_date=tolow') {
      params.sort = 'by_date=tohigh'
      setSearchParams(params)
    } else {
      params.sort = 'by_date=tolow'
      setSearchParams(params)
    }
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
    </div>
  )
}
