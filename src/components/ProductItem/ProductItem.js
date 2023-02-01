/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './cardProduct.module.css'
import { addToCart } from '../Redux/Slices/productsSlice/productsSlice'
import { RatingStar } from '../RatingStars/RatingStar'
import { addLike } from '../Redux/Slices/likeProductSlice/likeProductSlice'

export function ProductItem({ product }) {
  const productsInCart = useSelector((cart) => cart.products)
  const likeProducts = useSelector((cart) => cart.likeProduct)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let rating = 0
  if (product.reviews.length > 0) {
    for (let i = 0; i < product.reviews.length; i += 1) {
      rating += product.reviews[i].rating
    }
    rating /= product.reviews.length
  }

  const addToCartHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart(product))
  }

  const likeClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addLike(product))
  }

  const productClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`/product?id=${product._id}`)
  }

  const compareClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    alert('compare function isn`t realized')
  }

  const ratingClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    alert('rating function isn`t realized')
  }

  const discount = product.discount !== 0

  return (
    <div className={`${styles.product_item}`} onClick={productClickHandler}>
      <div className={`${styles.product_img}`}>
        <img src={product.pictures} alt="Food" />
      </div>
      <div className={`${styles.product_list}`}>
        <div className={`${styles.product_name}`}>
          <h3>{product.name}</h3>
        </div>
        <div className={`${styles.stars}`} onClick={ratingClickHandler}>
          {
            [...(new Array(Math.round(rating)))].map(() => <RatingStar key={crypto.randomUUID()} />)
          }
        </div>
        <span className={`${styles.discount}`}>{discount ? `скидка ${product.discount}%` : ''}</span>
        <span className={discount ? `${styles.discount}` : `${styles.price}`}>{`${product.price - (product.price * product.discount) / 100}`}</span>
        <div className={`${styles.actions}`}>
          <div className={`${styles.add_to_cart}`}>
            <button type="button" className={(productsInCart.findIndex((item) => item.id === product._id) !== -1) ? `${styles.in_cart_button}` : `${styles.cart_button}`} onClick={addToCartHandler}>
              {(productsInCart.findIndex((item) => item.id === product._id) !== -1) ? '🛒 В корзине' : '🛒 В корзину'}
            </button>
          </div>
          <div className={`${styles.add_to_links}`}>
            <span className={`${styles.wishlist}`} onClick={likeClickHandler}>{(likeProducts.findIndex((id) => id === product._id) !== -1) ? '♥' : '♡'}</span>
            <span className={`${styles.compare}`} onClick={compareClickHandler}>⚖</span>
          </div>
        </div>
      </div>
    </div>
  )
}
