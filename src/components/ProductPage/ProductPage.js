/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '../API/api'
import { addToCart } from '../Redux/Slices/productsSlice/productsSlice'
import { BackButton } from './BackButton'
import { ListOfReviews } from './ListOfReviews'
import cartLogo from '../Header/cart.png'
import style from './styles.module.css'

export function ProductPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [input] = useState(() => searchParams.get('id') ?? '')
  const GETPRODUCTID = [input]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productsInCart = useSelector((cart) => cart.products)
  const products = useSelector((store) => store.products)

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

  const addToCartClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart(product))
  }
  const showCart = (e) => {
    e.preventDefault()
    navigate('/cart')
  }

  const likeClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(`${product.name} like`)
  }

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
        <button type="button" onClick={showCart} className={`${style.button} px-5 mx-1`}>
          <div>
            Cart
            <img src={`${cartLogo}`} alt="cart" />
            <span className={`${style.numberCircle}`}>{`${products.length}`}</span>
          </div>
        </button>
      </div>
      <img className={`${style.img}`} src={product.pictures} alt="Food" />
      <hr />
      <h1 className={`${style.productName}`}>
        {product.name}
        <div className={`${style.add_to_links}`}>
          <span className={`${style.wishlist}`} onClick={likeClickHandler}>♡</span>
        </div>
      </h1>
      <h3 className={`${style.productName}`}>
        <div>
          <span>{`Price is ${product.price} rub`}</span>
        </div>
      </h3>
      <div className={`${style.cartButtonDiv}`}>
        <button type="button" className={(productsInCart.findIndex((item) => item.id === product._id) !== -1) ? `${style.in_cart_button}` : `${style.cart_button}`} onClick={addToCartClickHandler}>{(productsInCart.findIndex((item) => item.id === product._id) !== -1) ? '🛒 В корзине' : '🛒 В корзину'}</button>
      </div>
      <hr />
      <h4 className={`${style.productDiscription}`}>
        <div>
          <span>{product.description}</span>
        </div>
      </h4>
      <div>
        {product.reviews.map((review) => (
          <ListOfReviews key={crypto.randomUUID()} review={review} />
        ))}
      </div>
    </div>
  )
}
