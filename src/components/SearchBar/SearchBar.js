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
      <div className={`${params.sort.includes('by_name') ? styles.sortByButton : ''}`}>
        <button type="button" onClick={sortByNameClickHandler}>
          Name
          {params.sort === 'by_name=AZ' ? '↑' : ''}
          {params.sort === 'by_name=ZA' ? '↓' : ''}
        </button>
      </div>
      <div className={`${params.sort.includes('by_price') ? styles.sortByButton : ''}`}>
        <button type="button" onClick={sortByPriceClickHandler}>
          Price
          {params.sort === 'by_price=tolow' ? '↑' : ''}
          {params.sort === 'by_price=tohigh' ? '↓' : ''}
        </button>
      </div>
      <div className={`${params.sort.includes('by_discount') ? styles.sortByButton : ''}`}>
        <button type="button" onClick={sortByDiscountClickHandler}>
          Discount
          {params.sort === 'by_discount=tolow' ? '   ↑' : ''}
          {params.sort === 'by_discount=tohigh' ? '   ↓' : ''}
        </button>
      </div>
      <div className={`${params.sort.includes('by_rating') ? styles.sortByButton : ''}`}>
        <button type="button" onClick={sortByRatingClickHandler}>
          Rating
          {params.sort === 'by_rating=tolow' ? '↑' : ''}
          {params.sort === 'by_rating=tohigh' ? '↓' : ''}
        </button>
      </div>
      <div className={`${params.sort.includes('by_date') ? styles.sortByButton : ''}`}>
        <button type="button" onClick={sortByCreateDateClickHandler}>
          Date Updated
          {params.sort === 'by_date=tolow' ? '↑' : ''}
          {params.sort === 'by_date=tohigh' ? '↓' : ''}
        </button>
      </div>
    </div>
  )
}
