import styles from './headerStyles.module.css'

export function Header() {
  return (
    <div className={`${styles.header}`}>
      <img className="header__logo" src="img/logo.svg" alt="logo" />
      <div>
        <button type="button" className="btn btn-outline-primary">Primary</button>
        <button type="button" className="btn btn-outline-info">Info</button>
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
