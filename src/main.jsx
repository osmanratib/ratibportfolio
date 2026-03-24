import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLay from './MainLay/MainLay'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <MainLay/>
  </StrictMode>,
)
