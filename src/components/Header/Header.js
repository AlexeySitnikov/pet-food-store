import styles from './headerStyles.module.css'
import logo from './Header_logo.jpg'

export function Header() {
  return (
    <div className={`${styles.header} d-flex my-5 align-self-center align-items-center`}>
      <div className="me-auto p-2">
        <img className={`${styles.header__logo}`} src={`${logo}`} alt="logo" />
      </div>
      <div className={`${styles.header__control}`}>
        <button type="button" className={`${styles.button} px-5 mx-1`}>Primary</button>
        <button type="button" className={`${styles.button} px-5 mx-1`}>Info</button>
      </div>
    </div>
  )
}

// <header>
//     <img class="header__logo" src="img/logo.svg" alt="logo">
//     <div class="header__controls">
//       <a href="#form">Контакты</a>
//       <button href="#">Заказать</button>
//     </div>
//   </header>

// header{
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   position: fixed;
//   top: 0;
//   z-index: 1;
//   left: 0;
//   right: 0;
//   background: none;
//   transition: box-shadow, background-color .25s ease;
// }

// .header__scrolled{
//   background-color: #fff;
//   box-shadow: 0 12px 34px -11px rgb(65 62 101 / 10%);
// }

// .header__logo{
//   height: 30px;
// }
