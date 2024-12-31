import './App.css'
import Cart from './Cart/Cart';
import Home from './heroSection/Home'
import Navbar from './navbar/Navbar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Layout = ()=>{
  return(
  <>
  <Navbar />
  <Outlet/>
  </>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // Wrap Navbar in the layout
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);


  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App
