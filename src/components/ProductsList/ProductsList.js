/* eslint no-underscore-dangle: 0 */
import styles from './cardProduct.module.css'

export function ProductsList({ products }) {
  return (
    <>
      {
      products.map((el) => (
        <div key={el._id} className={`${styles.cardProduct} card align-items-center align-middle`}>
          <img src={el.pictures} className="card-img-top w-25" alt="dog`s food" />
          <div className="card-body">
            <h5 className="card-title">{el.name}</h5>
            <p className="card-text">{el.description}</p>
          </div>
        </div>
      ))
    }
    </>
  )
}
