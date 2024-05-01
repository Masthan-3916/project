import React from 'react'
import Header from '../component/navigation/Header'
import Footer from '../component/navigation/Footer'

const Defaultthems = ({children}) => {
  return (
    <div>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
  )
}

export default Defaultthems