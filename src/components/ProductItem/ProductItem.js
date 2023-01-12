/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux'
import styles from './cardProduct.module.css'
import { addToCart } from '../Redux/Slices/productsSlice/productsSlice'

export function ProductItem({ product }) {
  const dispatch = useDispatch()
  const addToCartHandler = (e) => {
    e.preventDefault()
    dispatch(addToCart(product))
  }
  return (
    <div className={`${styles.product_item}`}>
      <div className={`${styles.product_img}`}>
        <img src={product.pictures} alt="Food" />
      </div>
      <div className={`${styles.product_list}`}>
        <h3>{product.name}</h3>
        <div className={`${styles.stars}`} />
        <span className={`${styles.price}`}>{product.price}</span>
        <div className={`${styles.actions}`}>
          <div className={`${styles.add_to_cart}`}>
            <button type="button" className={`${styles.cart_button}`} onClick={addToCartHandler}>
              В корзину
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
