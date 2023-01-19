/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux'
import styles from './cardProduct.module.css'
import { addToCart } from '../Redux/Slices/productsSlice/productsSlice'

export function ProductItem({ product }) {
  const productsInCart = useSelector((cart) => cart.products)
  const dispatch = useDispatch()

  const addToCartHandler = (e) => {
    e.preventDefault()
    dispatch(addToCart(product))
  }

  const discount = product.discount !== 0

  return (
    <div className={`${styles.product_item}`}>
      <div className={`${styles.product_img}`}>
        <img src={product.pictures} alt="Food" />
      </div>
      <div className={`${styles.product_list}`}>
        <h3>{product.name}</h3>
        <div className={`${styles.stars}`} />
        <span className={`${styles.discount}`}>{discount ? `скидка ${product.discount}%` : ''}</span>
        <span className={discount ? `${styles.discount}` : `${styles.price}`}>{`${product.price - (product.price * product.discount) / 100}`}</span>
        <div className={`${styles.actions}`}>
          <div className={`${styles.add_to_cart}`}>
            <button type="button" className={(productsInCart.findIndex((item) => item.id === product._id) !== -1) ? `${styles.in_cart_button}` : `${styles.cart_button}`} onClick={addToCartHandler}>
              {(productsInCart.findIndex((item) => item.id === product._id) !== -1) ? 'В корзине' : 'В корзину'}
            </button>
          </div>
          <div className={`${styles.add_to_links}`}>
            <a href="" className={`${styles.wishlist}`} />
            <a href="" className={`${styles.compare}`} />
          </div>
        </div>
      </div>
    </div>
  )
}
