import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Dashboard from './pages/DashboardPage'
import ItemDetails from './pages/ItemDetailsPage'
import About from './pages/AboutPage'
import NotFound from './pages/NotFoundPage'

function App() {
  return (
    <div className="HomePage">

      <NavBar />
      <Sidebar />

      <div className="pages">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/item-details/:itemId" element={<ItemDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
      <Footer />


    </div>
  )
}

export default App;
