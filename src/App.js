import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CounterApp from './Components/CounterApp'
import ErrorBoundary from './Components/ErrorBoundary'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'








export default function App() {

 



  return (
    <div>
      <Navbar />
  <Routes>

    <Route exact path='/' element={<CounterApp />} />
    <Route path='*' element={<NotFound />} />

    <Route path='/error' element={<ErrorBoundary />} />
  </Routes>
  </div>
  )
}


