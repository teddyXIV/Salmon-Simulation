import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './routes/About.tsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    { path: '/about', element: <About /> }
  ]

}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
