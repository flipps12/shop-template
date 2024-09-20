import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Cart from './apps/cart.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>,
)
