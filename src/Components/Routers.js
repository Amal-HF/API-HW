import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import GetAPI from './GetAPI'
import Nav from './Nav'
import Footer from './Footer'

function Routers() {
  return (
    <div>
        <Nav/>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/GetAPI' element={<GetAPI/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Routers