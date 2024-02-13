import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import ListData from './data/list'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Dashboard from './pages/DashboardPage'
import ItemDetails from './pages/ItemDetailsPage'
import ListDisplay from './components/List.jsx'
import About from './pages/AboutPage'
import NotFound from './pages/NotFoundPage'

function App() {

  const [listToDisplay, setListToDisplay] = useState([]);
  useEffect(() => {
    setListToDisplay(ListData);
  }, []);


  const [task, setTask] = useState("");


  return (
    <div className="HomePage">

      <NavBar />

      <div className="container">
        <div className="sidebarContainer">
          <Sidebar task={task} setTask={setTask} listToDisplay={listToDisplay} setListToDisplay={setListToDisplay} />
        </div>
        <div className="pagesContainer">
          <Routes>
            <Route path="/" element={<Dashboard listToDisplay={listToDisplay} setListToDisplay={setListToDisplay} />} />
            <Route path="/about" element={<About />} />
            <Route path="/item-details/:index" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App;

