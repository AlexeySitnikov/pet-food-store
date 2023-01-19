/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { api } from '../API/api'
import { BackButton } from './BackButton'
import { CartItem } from './CartItem'
import { ClearCartButton } from './ClearCartButton'
import { MakeAnOrderButton } from './MakeAnOrderButton'
import styles from './styles.cart.module.css'

export function Cart() {
  const cart = useSelector((store) => store.products)
  const { data: productsFromQuery } = useQuery({
    queryKey: ['Products'].concat(cart.map((item) => item.id)),
    queryFn: () => api.getProductsByIds(cart.map((product) => product.id)),
  })
  const products = productsFromQuery ?? []

  // фунция filter возвращает массив, в котором только эл-менты из корзины
  // (которые нужны для покупки).
  // функция map, создается новый массив, в котором все элементы и их кол-во для покупки
  const productsToBuy = products.filter(
    (product) => cart.findIndex(
      (productFromCart) => (productFromCart.id === product._id && productFromCart.wantToBuy),
    ) !== -1,
  ).map((product) => {
    const currentProduct = cart.find((productFromCart) => productFromCart.id === product._id)
    return ({
      ...product,
      quantityToBuy: currentProduct.quantityToBuy,
    })
  })

  let totalPriceWithDiscount = 0
  for (let i = 0; i < productsToBuy.length; i += 1) {
    totalPriceWithDiscount
    += (productsToBuy[i].price - ((productsToBuy[i].price * productsToBuy[i].discount) / 100))
    * productsToBuy[i].quantityToBuy
  }

  let totalPrice = 0
  for (let i = 0; i < productsToBuy.length; i += 1) {
    totalPrice += productsToBuy[i].price * productsToBuy[i].quantityToBuy
  }

  if (!products.length) {
    return (
      <>
        <p>Cart is empty...</p>
        <BackButton />
        <ClearCartButton />
      </>
    )
  }
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.listOfProducts}`}>
          <ul className="list-group">
            {
          products.map((cartItem, i) => (
            <CartItem
              key={crypto.randomUUID()}
              product={cartItem}
              idx={i}
            />
          ))
        }
          </ul>
        </div>
        <div className={`${styles.orderSideContainer}`}>
          <div className={`${styles.orderTextLabel}`}>
            <h1>Order</h1>
          </div>
          <div className={`${styles.totalPriceTextLabel}`}>
            <h2>Total price</h2>
            <div className={`${styles.totalPriceAmountLabel}`}>
              <p>{`${totalPriceWithDiscount} руб`}</p>
            </div>
          </div>
          <div className={`${styles.discountPriceTextLabel}`}>
            <h2>You save</h2>
            <div className={`${styles.discountPriceAmountLabel}`}>
              <p>{`${totalPrice - totalPriceWithDiscount} руб`}</p>
            </div>
          </div>
        </div>
      </div>
      <BackButton />
      <ClearCartButton />
      <MakeAnOrderButton products={productsToBuy} />
    </>
  )
}
