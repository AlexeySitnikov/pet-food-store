import imgHeader from './imgHeader.jpg'
import styles from './headerStyles.module.css'

export function Header() {
  return (
    <div className="container">
      <div className={`${styles.headerDiv} flex-column`}>
        <div className="text-center mb-2">
          <img src={imgHeader} className={`${styles.header}`} alt="" />
        </div>
        <hr />
        <div className="text-center">
          <button type="button" className="btn btn-warning mx-2">Login</button>
          <button type="button" className="btn btn-warning mx-2">Skip</button>
        </div>
      </div>
    </div>
  )
}
