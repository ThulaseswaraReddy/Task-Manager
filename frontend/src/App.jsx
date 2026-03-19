import { useState } from 'react'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Dashboard from './pages/dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}/>
        <Route path="/signin" element={<Signin /> } />     
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>      
    </BrowserRouter>
  )}


export default App
