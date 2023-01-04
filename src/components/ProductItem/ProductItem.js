/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import { useDispatch } from 'react-redux'
import styles from './cardProduct.module.css'
import { addToCartAC, clearCartAC } from '../Redux/ActionCreators/cartAC'

export function ProductItem({ product }) {
  const dispatch = useDispatch()
  const showCard = (e) => {
    e.preventDefault()
    dispatch(addToCartAC(product._id))
    // вызов clearCartAC() необходим для проверки - просто выводится значение state
    dispatch(clearCartAC())
  }
  return (
    <div key={product._id} className={`${styles.product_item}`} onClick={showCard}>
      <div className={`${styles.product_img}`}>
        <a href="">
          <img src={product.pictures} alt="Food" />
        </a>
      </div>
      <div className={`${styles.product_list}`}>
        <h3>{product.name}</h3>
        <div className={`${styles.stars}`} />
        <span className={`${styles.price}`}>{product.price}</span>
        <div className={`${styles.actions}`}>
          <div className={`${styles.add_to_cart}`}>
            <a href="" className={`${styles.cart_button}`}>В корзину</a>
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
