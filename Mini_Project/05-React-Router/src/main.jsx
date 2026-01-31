import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import User from './pages/User';
import Github from './pages/Github';
import { githubInfoLoader } from './pages/Github';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      path='github'
       element={<Github />}
       loader = {githubInfoLoader}
        />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
