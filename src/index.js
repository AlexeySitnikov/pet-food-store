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
])

const query = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <QueryClientProvider client={query}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      ,
    </QueryClientProvider>
    ,
  </Provider>,
)
