import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import App from './App'
import { LogInPage } from './components/LogInPage/LogInPage'
import { Main } from './components/Main/Main'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { store } from './components/Redux/store'
import { Cart } from './components/Cart/Cart'
import { Order } from './components/Order/Order'
import { ProductPage } from './components/ProductPage/ProductPage'
import { LikeProductPage } from './components/LikeProductPage/LikeProductPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'login',
    element: <LogInPage />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
  {
    path: 'order',
    element: <Order />,
  },
  {
    path: 'product',
    element: <ProductPage />,
  },
  {
    path: 'likeList',
    element: <LikeProductPage />,
  },
])

const query = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <QueryClientProvider client={query}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>,
)
