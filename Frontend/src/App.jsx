import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import Home from './pages/home/Home.jsx'
import Entry from './pages/entry/Entry.jsx'

// alliance

function App() {
  

  return <div className='p-4 h-screen flex items-center justify-center'>
    <Entry />
    {/* <SignUp /> */}
    {/* <Login /> */}
    {/* <Home /> */}
    </div>
  
}

export default App
