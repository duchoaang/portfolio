import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import './App.css'
import Home from '@p/Home'



function App() {


  return (
    <>
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return <Route key ={index} path={route.path} element={<Page/>}/>
        })}
      </Routes>
    </Router>
    </>
  )
}

export default App
