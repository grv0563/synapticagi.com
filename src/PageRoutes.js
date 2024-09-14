import React from 'react'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';
import App from './App';
import Home from './pages/Home';
import Research from './pages/Research';
import Introduction from './pages/research-pages/Introduction';
import Preface from './pages/research-pages/Preface';
import Problem_1 from './pages/research-pages/Problem_1';
import Problem_2 from './pages/research-pages/Problem_2';
import Problem_3 from './pages/research-pages/Problem_3';
import Problem_4 from './pages/research-pages/Problem_4';
import Abstraction from './pages/research-pages/Abstraction';
import Conclusion from './pages/research-pages/Conclusion';
import Accident from './pages/research-pages/Accident';
import Future from './pages/research-pages/Future';

const router=createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/research', element: <Research/>},
  {path: '/contact', element: <Contact/>},
  {path: '/preface', element: <Preface/>},
  {path: '/intro', element: <Introduction/>},
  {path: '/accident', element: <Accident/>},
  {path: '/problem1', element: <Problem_1/>},
  {path: '/problem2', element: <Problem_2/>},
  {path: '/problem3', element: <Problem_3/>},
  {path: '/problem4', element: <Problem_4/>},
  {path: '/abstract', element: <Abstraction/>},
  {path: '/conclusion', element: <Conclusion/>},
  {path: '/future', element: <Future/>},

])

function PageRoutes() {

  return (
    <RouterProvider router={router}/>
  )
}

export default PageRoutes;