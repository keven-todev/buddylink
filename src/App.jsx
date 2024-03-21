import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Link from './pages/Link'
import Home from './pages/Home'
import Community from './pages/Community'
import About from './pages/About'
import Article1 from './pages/article1'
import Article2 from './pages/article2'


export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/> 
            <Route path='/home' element={<Home />}/> 
            <Route path='/Link' element={<Link />}/> 
            <Route path='/Community' element={<Community />}/> 
            <Route path='/Blog' element={<About />}/> 
            <Route path='/article1' element={<Article1 />}/> 
            <Route path='/article2' element={<Article2 />}/> 
        </Routes>
        </BrowserRouter>
    </div>
  )
}
