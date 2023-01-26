import React from 'react';

//Start components
import Experties from './components/Experties/Experties';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import People from './components/People/People';
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/Works/Works';
import Slick from './components/Slick/Slick';
//Start Style
import css from './styles/App.module.scss';
//Start dependencies
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


//Start React-router-dom

// const Layout = () => {
//   return (
//     <div className='app'>
//       <Top />
//       <Navbar />
//       <Outlet />
//       <Contact />
//       <Footer />
//     </div>
//   )
// }

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/test",
//         element: <Test />
//       },
//       {
//         path: "/products/:id",
//         element : <Products />
//       },
//       {
//         path: "/product/:id",
//         element: <Product />
//       }
//     ]
// }
// ])



const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={` bg-primary ${css.container}`}>
      {/* <RouterProvider router={router} /> */}
   
      <Header />
      
      <Hero />
      <Experties />
      <Works />
      <Slick />
      <Portfolio />
      <People />
      <Footer />

</div>
  )
}
// false =>  false && -100%
export default App