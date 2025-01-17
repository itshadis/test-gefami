import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './pages/layouts'
import SoalPseudoCode from './pages/pseudo_code'
import SoalUtama from './pages/soal_utama'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <SoalUtama /> } />
          <Route path='pseudo-code' element={ <SoalPseudoCode /> } />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
