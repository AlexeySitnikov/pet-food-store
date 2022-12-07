import imgHeader from './imgHeader.jpg'
import './headerStyles.module.css'

export function Header() {
  return (
    <div className="header">
      <img src={imgHeader} className="card-img-top" alt="..." />
      <div>
        <button type="button" className="btn btn-warning headerBtnLeft">Login</button>
        <button type="button" className="btn btn-warning headerBtnRight">Autorization</button>
      </div>
    </div>
  )
}
