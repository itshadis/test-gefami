import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layouts'
import './index.css'

const SoalPseudoCode = lazy(() => import('./pages/pseudo_code'));
const SoalUtama = lazy(() => import('./pages/soal_utama'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Suspense fallback={<div className='w-screen h-screen flex justify-center items-center text-4xl'>Loading...</div>}>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <SoalUtama /> } />
            <Route path='pseudo-code' element={ <SoalPseudoCode /> } />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  </StrictMode>,
)
