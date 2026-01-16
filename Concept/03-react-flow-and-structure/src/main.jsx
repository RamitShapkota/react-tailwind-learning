import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'



/*
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to  visit google'
}
*/



/*
const nextElement = (
  <h1>hello i am ramit</h1>
)
  */



/*const anotherElement = " ramit";

const reactElement1 = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'click me to visit google',
  anotherElement
)
*/


createRoot(document.getElementById('root')).render(

  <App />
  // App()-->this is allowed
  // nextElement-->it is allowed
  // reactElement--->this is not allowed
  // reactElement1

)
