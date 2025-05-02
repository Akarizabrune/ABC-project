import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Fonts from './layout/fonts'
import Dashboard from './User/Dashboard'
import Books from './User/Books'

function App() {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>



    <Route element={<Fonts/>}>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Books' element={<Books/>}/>

    </Route>
   </Routes>
    </div>
  )
}

export default App
