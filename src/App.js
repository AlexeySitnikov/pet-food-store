import './App.css'

import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Header } from './components/Header/Header'
import { SearchBar } from './components/SearchBar/SearchBar'

function App() {
  const token = useSelector((store) => store.token)

  return token ? (
    <>
      <Header />
      <SearchBar />
      <Outlet />
    </>
  ) : <Outlet />
}

export default App
