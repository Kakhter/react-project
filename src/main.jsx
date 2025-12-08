import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Component/Login.jsx'
import RequireAuth from './Component/RequireAuth.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


 
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/*" element={<RequireAuth><App /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
