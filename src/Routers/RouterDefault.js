import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CardDefault } from '../Assets/Components/CardDefault/CardDefault'
import { FooterDefault } from '../Assets/Components/FooterDefault/FooterDefault'
import { HomePage } from '../Pages/HomePage/HomePage'
import { Login } from '../Pages/Login/Login'
import { Trackyourshoes } from '../Pages/Trackyourshoes/Trackyourshoes'

export const RouterDefault = () => {
  return (
    <Routes>
      {/* coba */}
      <Route path="/coba" element={<CardDefault/>}/>

      <Route path="/" element={<HomePage />}/>
      <Route path="/trackyourshoes" element={<Trackyourshoes />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/footer" element={<FooterDefault />}/>
    </Routes>
  )
}
