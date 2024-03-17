import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NavBar from './components/NavBar/NavBar'
import Propert from './pages/Propert'
import PropertyDetails from './pages/PropertyDetails'


import './App.css'
function App() {

  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/propert' element={<Propert />} />
        <Route path='/propertydetails' element={<PropertyDetails />} />
      </Routes>

      
    </div>
  )
}

export default App
