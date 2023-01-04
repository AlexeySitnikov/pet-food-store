/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint no-underscore-dangle: 0 */

import { ProductItem } from '../ProductItem/ProductItem'

export function ProductsList({ products }) {
  return (
    <>
      {
      products.map((product) => (
        <ProductItem
          key={product._id}
          product={product}
        />

        // <div key={el._id} className={`${styles.cardProduct}
        // card align-items-center align-middle`}>
        //   <img src={el.pictures} className="card-img-top w-25" alt="dog`s food" />
        //   <div className="card-body">
        //     <h5 className="card-title">{el.name}</h5>
        //     <p className="card-text">{el.description}</p>
        //   </div>
        // </div>
      ))
    }
    </>
  )
}

/* <div class="product-item">
  <div class="product-img">
    <a href="">
      <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg">
    </a>
  </div>
  <div class="product-list">
    <h3>Маленькое черное платье</h3>
    <div class="stars"></div>
    <span class="price">₽ 1999</span>
    <div class="actions">
      <div class="add-to-cart">
        <a href="" class="cart-button">В корзину</a>
      </div>
      <div class="add-to-links">
        <a href="" class="wishlist"></a>
        <a href="" class="compare"></a>
      </div>
      </div>
    </div>
</div> */

// "discount": 15,
// "stock": 10,
// "available": true,
// "pictures": "https://react-learning.ru/image-compressed/1.jpg",
// "likes": [],
// "reviews": [],
// "tags": [],
// "isPublished": true,
// "_id": "622c779c77d63f6e70967d1c",
// "name": "Желудки утиные сушено-вяленые",
// "author": {},
// "price": 4500,
// "wight": "100 г",
// "description": "Описание demo",
// "created_at": "2022-03-12T10:36:12.324Z",
// "updated_at": "2022-12-18T17:20:49.791Z",
// "__v": 0
