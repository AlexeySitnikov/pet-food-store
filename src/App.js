/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useState } from 'react'

import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { TOKEN_KEY_IN_LS } from './utils/constrans'
import { LogInPage } from './components/LogInPage/LogInPage'

function App() {
  const [TOKEN, setToken] = useState()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const tokenFromLS = localStorage.getItem(TOKEN_KEY_IN_LS)
    const token = tokenFromLS ? JSON.parse(tokenFromLS) : ''
    if (token.length) {
      setToken(token)
      fetch('https://api.react-learning.ru/products', {
        method: 'GET',
        headers: {
          authorization: `${token}`,
        },
      }).then((responce) => (responce.json())).then((productsList) => {
        setProducts(productsList.products)
      })
    }
  }, [])

  // useEffect(() => {
  //   fetch('https://api.react-learning.ru/products', {
  //     method: 'GET',
  //     headers: {
  //       authorization: `${TOKEN}`,
  //     },
  //   }).then((responce) => (responce.json())).then((productsList) => {
  //     console.log(TOKEN)
  //     // productsList.products.forEach((el) => setProducts(el))
  //     setProducts(productsList.products)
  //   })
  //   // console.log(TOKEN)
  // }, [TOKEN])

  if (TOKEN) {
    return (
      <div className="container">
        {/* <Header /> */}
        <Main products={products} />
        {/* <Footer /> */}
      </div>
    )
  }
  return (<LogInPage />)

  // return (
  //   <div className="container">
  //     <Header />
  //     {/* <Main products={products} /> */}
  //     <Footer />
  //   </div>
  // )
}

export default App
