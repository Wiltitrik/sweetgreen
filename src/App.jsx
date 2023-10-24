import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/scss/main.css'
import './assets/cards.json'
import Head from './components/Head'
import Hero from './components/Hero'
import MenuList from './components/MenuList'
import Customise from './components/Customise'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head/>
      <Hero/>
      <MenuList/>
      <Customise/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
