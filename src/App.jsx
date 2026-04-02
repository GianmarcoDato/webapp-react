import { useState } from 'react'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import DefaultLayout from './layouts/DefaultLayout'
import DetailsPage from './pages/DetailsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/details/:id' element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
