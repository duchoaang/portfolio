import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import './App.css'
import Home from '@p/Home'
import DefaultLayout from './components/Layout/DefaultLayout'
import 'boxicons';

function App() {


  return (
    <>
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout
          const Page = route.component
          return <Route key ={index} path={route.path} element={<Layout><Page/></Layout>}/>
        })}
      </Routes>
    </Router>
    </>
  )
}

export default App
